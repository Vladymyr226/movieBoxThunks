import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Preview from '../components/preview/Preview'
import Card from '../components/card/Card'
import { selectorPopularStore } from '../store/moviesPopular/selectors'
import './homeNowPlaying.scss'
import routes from '../routes/route'
import Spinner from '../components/spinner/Spinner'
import { decrementPage, getMoviesPopular, incrementPage } from '../store/moviesPopular/actions'
import { selectorSearchMoviesStore } from '../store/searchMovies/selectors'
import ButtonPaginator from '../components/buttonPaginator/ButtonPaginator'

const Home = () => {
  const dispatch = useDispatch()

  const { popularFilms, IsLoadingMoviesPopular, currentPagePopular } =
    useSelector(selectorPopularStore)
  const { searchMovies, searchIsLoadingMovies } = useSelector(selectorSearchMoviesStore)

  useEffect(() => {
    dispatch(getMoviesPopular(currentPagePopular))
  }, [currentPagePopular])

  return (
    <>
      <main className="main">
        <Preview />

        {searchMovies.length < 1 && (
          <div className="header_type_films">
            <h2>Что популярно</h2>
          </div>
        )}

        {IsLoadingMoviesPopular ? (
          <Spinner />
        ) : (
          <>
            {searchMovies.length < 1 ? (
              <div className="main_container_cards">
                {popularFilms?.map((film, index) => (
                  <React.Fragment key={`Popular-${index}`}>
                    <Card
                      id={film.id}
                      backdropPath={
                        !film.backdropPath
                          ? '/img/no_photo_w220_h330.jpg'
                          : routes.images + film.backdropPath
                      }
                      title={film.title}
                      releaseDate={film.releaseDate}
                    />
                  </React.Fragment>
                ))}
              </div>
            ) : null}
          </>
        )}

        {searchMovies.length > 0 && searchIsLoadingMovies ? (
          <Spinner />
        ) : (
          <>
            <div className="main_container_cards">
              {searchMovies.map((film, index) => (
                <React.Fragment key={`Search-${index}`}>
                  <Card
                    id={film.id}
                    backdropPath={
                      !film.backdropPath
                        ? '/img/no_photo_w220_h330.jpg'
                        : routes.images + film.backdropPath
                    }
                    title={film.title}
                    releaseDate={film.releaseDate}
                  />
                </React.Fragment>
              ))}
            </div>
          </>
        )}
        {!searchMovies.length && !IsLoadingMoviesPopular && (
          <div className="container_paginator_buttons">
            {currentPagePopular > 1 && (
              <ButtonPaginator childText={'⬅'} pagination={() => dispatch(decrementPage())} />
            )}
            <h2>{currentPagePopular}</h2>
            {currentPagePopular < 34638 && (
              <ButtonPaginator childText={'➡'} pagination={() => dispatch(incrementPage())} />
            )}
          </div>
        )}
      </main>
    </>
  )
}

export default Home
