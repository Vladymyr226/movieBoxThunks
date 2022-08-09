import { Dispatch } from 'redux'
import axiosClient from '../../setup/axiosClient'
import * as types from './actionTypes'
import { MovieRequest, PayloadFailure, PayloadMoviesSuccess } from '../../types/movies'
import { transformMoviesData } from '../../transformsData/transformMoviesData'

const getPlayNowRequest = () => ({ type: types.MOVIES_PLAY_NOW_REQUEST })
const getPlayNowSuccess = (payload: PayloadMoviesSuccess) => ({
  type: types.MOVIES_PLAY_NOW_SUCCESS,
  payload,
})
const getPlayNowFailure = (payload: PayloadFailure) => ({
  type: types.MOVIES_PLAY_NOW_FAILURE,
  payload,
})

export const getMoviesPlayNow = (currentPage: number) => async (dispatch: Dispatch) => {
  dispatch(getPlayNowRequest())

  try {
    const data: MovieRequest = await axiosClient.get(
      `/movie/now_playing?api_key=${process.env.REACT_APP_BASE_API_KEY}&page=${currentPage}`
    )

    const dataToStore = transformMoviesData(data.results)

    dispatch(
      getPlayNowSuccess({ films: dataToStore, page: data.page, totalPages: data.total_pages })
    )
  } catch (error) {
    dispatch(getPlayNowFailure({ errorMessage: 'Failed req get movies' }))
  }
}

export const decrementPage = () => ({
  type: types.DECREMENT_PAGE,
})

export const incrementPage = () => ({
  type: types.INCREMENT_PAGE,
})

export type Actions =
  | ReturnType<typeof getPlayNowRequest>
  | ReturnType<typeof getPlayNowSuccess>
  | ReturnType<typeof getPlayNowFailure>
  | ReturnType<typeof decrementPage>
  | ReturnType<typeof incrementPage>
