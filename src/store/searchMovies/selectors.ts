import { Selector } from 'react-redux'
import { createSelector } from 'reselect'
import { SearchMoviesToStore } from '../../types/searchMovies'
import { State } from '../searchMovies/reducer'

type StoreSearchMovies = {
  search: State
}

const selectorSearchMovies: Selector<StoreSearchMovies, SearchMoviesToStore[]> = (state) => {
  return state.search.films || []
}
const selectorSearchIsLoading: Selector<StoreSearchMovies, boolean> = (state) => {
  return state.search.searchIsLoading
}

export const selectorSearchMoviesStore: Selector<
  StoreSearchMovies,
  {
    searchMovies: SearchMoviesToStore[]
    searchIsLoadingMovies: boolean
  }
> = createSelector(
  [selectorSearchMovies, selectorSearchIsLoading],
  (searchMovies, searchIsLoadingMovies) => ({
    searchMovies,
    searchIsLoadingMovies,
  })
)
