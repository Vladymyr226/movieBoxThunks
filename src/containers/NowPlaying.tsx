import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementPage, getMoviesPlayNow, incrementPage } from '../store/moviesPlayNow/actions'
import { selectorPlayNowStore } from '../store/moviesPlayNow/selectors'
import Preview from '../components/preview/Preview'
import Card from '../components/card/Card'
import routes from '../routes/route'
import './homeNowPlaying.scss'
import Spinner from '../components/spinner/Spinner'
import { selectorSearchMoviesStore } from '../store/searchMovies/selectors'
import ButtonPaginator from '../components/buttonPaginator/ButtonPaginator'

const NowPlaying = () => {
  const dispatch = useDispatch()

  const { playNowFilms, IsLoadingMoviesPlayNow, currentPagePlayNow } =
    useSelector(selectorPlayNowStore)
  const { searchMovies, searchIsLoadingMovies } = useSelector(selectorSearchMoviesStore)

  useEffect(() => {
    dispatch(getMoviesPlayNow(currentPagePlayNow))
  }, [currentPagePlayNow])

  return (
    <>
      <main className="main">
        <Preview />
        {searchMovies.length < 1 && (
          <div className="header_type_films">
            <h2>Сейчас смотрят фильмы</h2>
          </div>
        )}
        {IsLoadingMoviesPlayNow ? (
          <Spinner />
        ) : (
          <>
            {searchMovies.length < 1 ? (
              <div className="main_container_cards">
                {playNowFilms?.map((film, index) => (
                  <React.Fragment key={`NowPlaying-${index}`}>
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
              {searchMovies?.map((film, index) => (
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
        {!searchMovies.length && !IsLoadingMoviesPlayNow && (
          <div className="container_paginator_buttons">
            {currentPagePlayNow > 1 && (
              <ButtonPaginator childText={'⬅'} pagination={() => dispatch(decrementPage())} />
            )}
            <h2>{currentPagePlayNow}</h2>
            {currentPagePlayNow < 72 && (
              <ButtonPaginator childText={'➡'} pagination={() => dispatch(incrementPage())} />
            )}
          </div>
        )}
        v
      </main>
    </>
  )
}

export default NowPlaying
