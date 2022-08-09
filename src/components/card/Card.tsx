import React from 'react'
import { MovieToStore } from '../../types/movies'
import { useNavigate } from 'react-router-dom'
import './card.scss'

const Card: React.FC<MovieToStore> = ({ id, backdropPath, title, releaseDate }) => {
  const navigate = useNavigate()

  function getFilmId(id: number): void {
    navigate(`/movie/id=${id}`)
  }

  return (
    <div className="container_cards" onClick={() => getFilmId(id)}>
      <div className="image_card_wrapper">
        <img className="image_card" src={backdropPath} alt="Film" />
      </div>
      <div className="flex_item_card">
        <h3 className="title_card">{title}</h3>
        <br />
        <p>{releaseDate}</p>
      </div>
    </div>
  )
}

export default Card
