import { Selector } from 'react-redux'
import { State } from './reducer'
import { createSelector } from 'reselect'
import { words, MovieDetailsToStore } from '../../types/movieDetails'

type StoreMovieDetails = {
  movieDetails: State
}

const selectorMovieDetails: Selector<StoreMovieDetails, MovieDetailsToStore> = (state) => {
  return state.movieDetails.movieDetails
}
const selectorIsLoading: Selector<StoreMovieDetails, boolean> = (state) => {
  return state.movieDetails.isLoading
}
const selectorVideoIsLoading: Selector<StoreMovieDetails, boolean> = (state) => {
  return state.movieDetails.videoIsLoading
}
const selectorMovieVideo: Selector<StoreMovieDetails, string> = (state) => {
  return state.movieDetails.video
}
const selectorMovieKeyWords: Selector<StoreMovieDetails, words[]> = (state) => {
  return state.movieDetails.words
}

export const selectorMovieDetailsStore: Selector<
  StoreMovieDetails,
  {
    MovieDetails: MovieDetailsToStore
    IsLoadingMovieDetails: boolean
    MovieVideo: string
    videoIsLoading: boolean
    keyWords: words[]
  }
> = createSelector(
  [
    selectorMovieDetails,
    selectorIsLoading,
    selectorMovieVideo,
    selectorVideoIsLoading,
    selectorMovieKeyWords,
  ],
  (MovieDetails, IsLoadingMovieDetails, MovieVideo, videoIsLoading, keyWords) => ({
    MovieDetails,
    IsLoadingMovieDetails,
    MovieVideo,
    videoIsLoading,
    keyWords,
  })
)
