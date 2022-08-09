import { combineReducers } from 'redux'
import { reducer as popular } from './moviesPopular/index'
import { reducer as moviesPlayNow } from './moviesPlayNow/index'
import { reducer as movieDetails } from './movieDetails/index'
import { reducer as searchMovies } from './searchMovies/index'

export const rootReducer = combineReducers({
  popular: popular,
  moviesPlayNow: moviesPlayNow,
  movieDetails: movieDetails,
  search: searchMovies,
})

export type RootState = ReturnType<typeof rootReducer>
