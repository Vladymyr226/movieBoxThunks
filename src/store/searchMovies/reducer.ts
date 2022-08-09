import { Reducer } from 'redux'
import * as types from './actionTypes'
import { Actions } from './actions'
import { initialStateSearchMovies } from '../../types/searchMovies'

export type State = typeof initialStateSearchMovies

const reducer: Reducer<State, Actions> = (state = initialStateSearchMovies, action) => {
  switch (action.type) {
    case types.SEARCH_MOVIES_REQUEST:
      return { ...state, searchIsLoading: true }

    case types.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        ...action.payload,
        searchIsLoading: false,
      }

    case types.SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        searchIsLoading: false,
        errorMessage: action.payload.errorMessage,
      }

    case types.CLEAR:
      return {
        ...state,
        searchIsLoading: false,
        films: [],
      }

    default:
      return state
  }
}

export default reducer
