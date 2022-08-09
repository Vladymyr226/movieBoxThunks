import { Dispatch } from 'redux'
import axiosClient from '../../setup/axiosClient'
import * as types from './actionTypes'
import { MovieRequest, PayloadFailure, PayloadMoviesSuccess } from '../../types/movies'
import { transformMoviesData } from '../../transformsData/transformMoviesData'

const getPopularRequest = () => ({ type: types.MOVIES_POPULAR_REQUEST })
const getPopularSuccess = (payload: PayloadMoviesSuccess) => ({
  type: types.MOVIES_POPULAR_SUCCESS,
  payload,
})
const getPopularFailure = (payload: PayloadFailure) => ({
  type: types.MOVIES_POPULAR_FAILURE,
  payload,
})

export const getMoviesPopular = (currentPage: number) => async (dispatch: Dispatch) => {
  dispatch(getPopularRequest())

  try {
    const data: MovieRequest = await axiosClient.get(
      `/movie/popular?api_key=${process.env.REACT_APP_BASE_API_KEY}&page=${currentPage}`
    )

    const dataToStore = await transformMoviesData(data.results)

    await dispatch(
      getPopularSuccess({ films: dataToStore, page: data.page, totalPages: data.total_pages })
    )
  } catch (error) {
    dispatch(getPopularFailure({ errorMessage: 'Failed req get movies' }))
  }
}

export const decrementPage = () => ({
  type: types.DECREMENT_PAGE,
})

export const incrementPage = () => ({
  type: types.INCREMENT_PAGE,
})

export type Actions =
  | ReturnType<typeof getPopularRequest>
  | ReturnType<typeof getPopularSuccess>
  | ReturnType<typeof getPopularFailure>
  | ReturnType<typeof decrementPage>
  | ReturnType<typeof incrementPage>
