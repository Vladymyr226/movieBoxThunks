import { Dispatch } from 'redux'
import * as types from './actionTypes'
import axiosClient from '../../setup/axiosClient'
import routes from '../../routes/route'
import { PayloadFailure } from '../../types/movies'
import {
  MovieDetailsRequestResult,
  MovieKeyWordsRequest,
  MovieVideoRequest,
  PayloadMovieDetailsSuccess,
  PayloadMovieKeyWordsSuccess,
  PayloadMovieVideoSuccess,
} from '../../types/movieDetails'
import { transformMovieDetailsData } from '../../transformsData/transformMovieDetailsData'

const getMovieDetailsRequest = () => ({ type: types.MOVIE_DETAILS_REQUEST })
const getMovieDetailsSuccess = (payload: PayloadMovieDetailsSuccess) => ({
  type: types.MOVIE_DETAILS_SUCCESS,
  payload,
})
const getMovieDetailsFailure = (payload: PayloadFailure) => ({
  type: types.MOVIE_DETAILS_FAILURE,
  payload,
})

export const getMovieDetails = (id: number) => async (dispatch: Dispatch) => {
  dispatch(getMovieDetailsRequest())
  try {
    const data: MovieDetailsRequestResult = await axiosClient.get(
      `${routes.movieDetails}${id}?api_key=${process.env.REACT_APP_BASE_API_KEY}`
    )
    const dataToStore = transformMovieDetailsData(data)

    dispatch(getMovieDetailsSuccess({ movieDetails: dataToStore }))
  } catch (error) {
    dispatch(getMovieDetailsFailure({ errorMessage: 'Failed req get movies' }))
  }
}

const getMovieVideoRequest = () => ({ type: types.MOVIE_VIDEO_REQUEST })
const getMovieVideoSuccess = (payload: PayloadMovieVideoSuccess) => ({
  type: types.MOVIE_VIDEO_SUCCESS,
  payload,
})
const getMovieVideoFailure = (payload: PayloadFailure) => ({
  type: types.MOVIE_VIDEO_FAILURE,
  payload,
})

export const getMovieVideo = (id: number) => async (dispatch: Dispatch) => {
  dispatch(getMovieVideoRequest())
  try {
    const videos: MovieVideoRequest = await axiosClient.get(
      `${routes.videos}${id}/videos?api_key=${process.env.REACT_APP_BASE_API_KEY}`
    )

    dispatch(getMovieVideoSuccess({ video: videos.results[0].key }))
  } catch (error) {
    dispatch(getMovieVideoFailure({ errorMessage: 'Failed req get movies' }))
  }
}

const getMovieKeyWordsRequest = () => ({ type: types.MOVIE_KEY_WORDS_REQUEST })
const getMovieKeyWordsSuccess = (payload: PayloadMovieKeyWordsSuccess) => ({
  type: types.MOVIE_KEY_WORDS_SUCCESS,
  payload,
})
const getMovieKeyWordsFailure = (payload: PayloadFailure) => ({
  type: types.MOVIE_KEY_WORDS_FAILURE,
  payload,
})

export const getMovieKeyWords = (id: number) => async (dispatch: Dispatch) => {
  dispatch(getMovieKeyWordsRequest())
  try {
    const keyWords: MovieKeyWordsRequest = await axiosClient.get(
      `${routes.keyWords}${id}/keywords?api_key=${process.env.REACT_APP_BASE_API_KEY}`
    )
    dispatch(
      getMovieKeyWordsSuccess({
        words: keyWords.keywords,
      })
    )
  } catch (error) {
    dispatch(getMovieKeyWordsFailure({ errorMessage: 'Failed req get movies' }))
  }
}

export type Actions =
  | ReturnType<typeof getMovieDetailsRequest>
  | ReturnType<typeof getMovieDetailsSuccess>
  | ReturnType<typeof getMovieDetailsFailure>
  | ReturnType<typeof getMovieVideoRequest>
  | ReturnType<typeof getMovieVideoSuccess>
  | ReturnType<typeof getMovieVideoFailure>
  | ReturnType<typeof getMovieKeyWordsRequest>
  | ReturnType<typeof getMovieKeyWordsSuccess>
  | ReturnType<typeof getMovieKeyWordsFailure>
