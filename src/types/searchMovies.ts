export type SearchMoviesRequestResult = {
  release_date: string
  id: number
  title: string
  backdrop_path: string
}

export type SearchMoviesToStore = {
  releaseDate: string
  id: number
  title: string
  backdropPath: string
}

export type PayloadSearchMoviesSuccess = {
  films: SearchMoviesToStore[]
}

export type SearchMoviesRequest = {
  results: SearchMoviesRequestResult[]
}

export type PayloadFailure = {
  errorMessage: string
}

export const initialStateSearchMovies = {
  films: [] as SearchMoviesToStore[],
  searchIsLoading: true as boolean,
  errorMessage: null as null | string,
}
