export type MovieRequestResult = {
  release_date: string
  id: number
  title: string
  backdrop_path: string
}

export type MovieRequest = {
  page: number
  total_pages: number
  results: MovieRequestResult[]
}
export type MovieToStore = {
  releaseDate: string
  id: number
  title: string
  backdropPath: string
}

export type PayloadMoviesSuccess = {
  films: MovieToStore[]
  page: number
  totalPages: number
}

export type PayloadFailure = {
  errorMessage: string
}

export const initialStateMovies = {
  films: [] as MovieToStore[],
  isLoading: true as boolean,
  page: null as null | number,
  totalPages: null as null | number,
  errorMessage: null as null | string,
}
