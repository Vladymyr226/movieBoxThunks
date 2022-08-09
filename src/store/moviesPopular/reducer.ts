import { Reducer } from 'redux'
import * as types from './actionTypes'
import { initialStateMovies } from '../../types/movies'
import { Actions } from './actions'

export type State = typeof initialStateMovies

const reducer: Reducer<State, Actions> = (state = initialStateMovies, action) => {
  switch (action.type) {
    case types.MOVIES_POPULAR_REQUEST:
      return { ...state, isLoading: true }

    case types.MOVIES_POPULAR_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      }

    case types.MOVIES_POPULAR_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errorMessage,
      }

    case types.DECREMENT_PAGE:
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        page: state.page! - 1,
      }

    case types.INCREMENT_PAGE:
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        page: state.page! + 1,
      }

    default:
      return state
  }
}

export default reducer
