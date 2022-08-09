import { Selector } from 'react-redux'
import { MovieToStore } from '../../types/movies'
import { State } from './reducer'
import { createSelector } from 'reselect'

type StorePlayNowFilms = {
  moviesPlayNow: State
}

const selectorFilms: Selector<StorePlayNowFilms, MovieToStore[]> = (state) => {
  return state.moviesPlayNow.films
}

const selectorIsLoading: Selector<StorePlayNowFilms, boolean> = (state) => {
  return state.moviesPlayNow.isLoading
}
const selectorCurrentPage: Selector<StorePlayNowFilms, number> = (state) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return state.moviesPlayNow.page!
}

export const selectorPlayNowStore: Selector<
  StorePlayNowFilms,
  { playNowFilms: MovieToStore[]; IsLoadingMoviesPlayNow: boolean; currentPagePlayNow: number }
> = createSelector(
  [selectorFilms, selectorIsLoading, selectorCurrentPage],
  (playNowFilms, IsLoadingMoviesPlayNow, currentPagePlayNow) => ({
    playNowFilms,
    IsLoadingMoviesPlayNow,
    currentPagePlayNow,
  })
)
