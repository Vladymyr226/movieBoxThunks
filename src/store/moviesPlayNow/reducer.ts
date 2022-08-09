import { Reducer } from 'redux'
import { initialStateMovies } from '../../types/movies'
import { Actions } from './actions'
import * as types from './actionTypes'

export type State = typeof initialStateMovies

const reducer: Reducer<State, Actions> = (state = initialStateMovies, action) => {
  switch (action.type) {
    case types.MOVIES_PLAY_NOW_REQUEST:
      return { ...state, isLoading: true }

    case types.MOVIES_PLAY_NOW_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      }

    case types.MOVIES_PLAY_NOW_FAILURE:
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
