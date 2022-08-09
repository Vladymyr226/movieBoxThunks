import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDebounce } from '../../hook/debounce'
import { useInput } from '../../hook/input'
import { clearState, getSearchMovies } from '../../store/searchMovies/actions'
import { selectorSearchMoviesStore } from '../../store/searchMovies/selectors'
import './preview.scss'

const Preview = () => {
  const { searchMovies } = useSelector(selectorSearchMoviesStore)

  const dispatch = useDispatch()

  const [isSearch, setIsSearch] = useState(false)

  const input = useInput('')
  const debounced = useDebounce<string>(input.value, 400)

  useEffect(() => {
    const workWithInputSearch = async () => {
      if (!input.value.length || input.value.length < 4) {
        setIsSearch(false)
        return await dispatch(clearState())
      }
      dispatch(getSearchMovies(input.value))
      setIsSearch(true)
    }
    workWithInputSearch()
  }, [debounced])

  return (
    <>
      <div className="flex_container_preview">
        <div className="flex_item_preview">
          <span className="title_preview">Добро пожаловать.</span> <br />
          <span>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</span>
        </div>
        <input
          className="input_preview"
          type="text"
          placeholder="Тот кто ищет, тот найдет..."
          {...input}
        />
      </div>

      {isSearch && !searchMovies.length && (
        <div className="header_type_films">
          <h2>Такого фильма не найдено!</h2>
        </div>
      )}
    </>
  )
}

export default Preview
