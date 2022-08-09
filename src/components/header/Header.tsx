import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
  return (
    <header className="flex_container_header color_header">
      <div className="flex_item_header">
        <Link className="a" to={'/movies/popular'}>
          T M D B
        </Link>
      </div>
      <div className="flex_item_header">
        <Link className="a" to={'/movies/now-playing'}>
          Смотрят сейчас
        </Link>
      </div>
      <div className="flex_item_header">
        <a
          className="a"
          target={'_blank'}
          href="https://github.com/Vladymyr226/movieBox"
          rel="noreferrer"
        >
          Исходный код
        </a>
      </div>
    </header>
  )
}

export default Header
