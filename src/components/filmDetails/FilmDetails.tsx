import React from 'react'
import { useSelector } from 'react-redux'
import routes from '../../routes/route'
import { selectorMovieDetailsStore } from '../../store/movieDetails/selectors'
import { MovieDetailsToStore } from '../../types/movieDetails'
import './filmDetails.scss'

const FilmDetails: React.FC<MovieDetailsToStore> = ({
  backdropPath,
  budget,
  genres,
  originalLanguage,
  overview,
  popularity,
  revenue,
  runtime,
  status,
  tagline,
  title,
  voteAverage,
  voteCount,
}) => {
  const divStyle = {
    backgroundImage:
      'url(' + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces` + backdropPath + ')',
  }

  const { keyWords } = useSelector(selectorMovieDetailsStore)

  return (
    <div className="container_movie_details" style={divStyle}>
      <div>
        <img className="image_movie_details" src={routes.imagesDetails + backdropPath} alt="Film" />
      </div>
      <div className="movie_details">
        <h2 className="h2_reset_margin_top">{title}</h2>
        {genres.map(({ name, id }) => (
          <span key={`Genre-id${id}`}>{name} </span>
        ))}
        * {runtime} m
        <br />
        <br />
        <p>{tagline}</p>
        <h3>Обзор</h3>
        <p>{overview}</p>
        <br /> <br />
        <b>Статус: </b>
        {status} | <b>Исходный язык: </b> {originalLanguage}
        <br /> <br />
        <b>Бюджет: </b> {budget}$ | <b>Популярность: </b> {popularity}
        <br /> <br />
        <b>Сборы: </b> {revenue}$ | <b>Количство голосов: </b> {voteCount} | <b>Средний голос: </b>
        {voteAverage} <br /> <br />
        <b>Ключевые слова: </b>
        <div className="container_key_words">
          <ul className="hr">
            {keyWords.map((word, index) => (
              <li key={index}> {word.name + ' '}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FilmDetails
