import { Dispatch } from 'redux'
import axiosClient from '../../setup/axiosClient'
import * as types from './actionTypes'
import routes from '../../routes/route'
import { PayloadFailure } from '../../types/movies'
import { transformMoviesData } from '../../transformsData/transformMoviesData'
import { PayloadSearchMoviesSuccess, SearchMoviesRequest } from '../../types/searchMovies'

const getSearchRequest = () => ({ type: types.SEARCH_MOVIES_REQUEST })

export const getSearchSuccess = (payload: PayloadSearchMoviesSuccess) => ({
  type: types.SEARCH_MOVIES_SUCCESS,
  payload,
})
const getSearchFailure = (payload: PayloadFailure) => ({
  type: types.SEARCH_MOVIES_FAILURE,
  payload,
})

export const getSearchMovies = (inputSearchValue: string) => async (dispatch: Dispatch) => {
  dispatch(getSearchRequest())

  try {
    const data: SearchMoviesRequest = await axiosClient.get(routes.searchVideos + inputSearchValue)

    const dataToStore = await transformMoviesData(data.results)

    await dispatch(getSearchSuccess({ films: dataToStore }))
  } catch (error) {
    dispatch(getSearchFailure({ errorMessage: 'Failed req get movies' }))
  }
}

export const clearState = () => ({
  type: types.CLEAR,
})

export type Actions =
  | ReturnType<typeof getSearchRequest>
  | ReturnType<typeof getSearchSuccess>
  | ReturnType<typeof getSearchFailure>
  | ReturnType<typeof clearState>
