import { Reducer } from 'redux'
import { initialStateMovieDetails } from '../../types/movieDetails'
import { Actions } from './actions'
import * as types from './actionTypes'

export type State = typeof initialStateMovieDetails

const reducer: Reducer<State, Actions> = (state = initialStateMovieDetails, action) => {
  switch (action.type) {
    case types.MOVIE_DETAILS_REQUEST:
      return { ...state, isLoading: true }

    case types.MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      }

    case types.MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errorMessage,
      }

    case types.MOVIE_VIDEO_REQUEST:
      return { ...state, videoIsLoading: true }

    case types.MOVIE_VIDEO_SUCCESS:
      return {
        ...state,
        ...action.payload,
        videoIsLoading: false,
      }

    case types.MOVIE_VIDEO_FAILURE:
      return {
        ...state,
        videoIsLoading: false,
        errorMessage: action.payload.errorMessage,
      }

    case types.MOVIE_KEY_WORDS_REQUEST:
      return { ...state }

    case types.MOVIE_KEY_WORDS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }

    case types.MOVIE_KEY_WORDS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }

    default:
      return state
  }
}

export default reducer
