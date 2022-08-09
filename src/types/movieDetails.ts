export type MovieDetailsRequestResult = {
  backdrop_path: string
  budget: number
  genres: { id: number; name: string }[]
  id: number
  original_language: string
  overview: string
  popularity: number
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  vote_average: number
  vote_count: number
}

export type MovieDetailsToStore = {
  backdropPath: string
  budget: number
  genres: { id?: number; name: string }[]
  id: number
  originalLanguage: string
  overview: string
  popularity: number
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  voteAverage: number
  voteCount: number
}

export type PayloadMovieDetailsSuccess = {
  movieDetails: MovieDetailsToStore
}

export type PayloadMovieVideoSuccess = {
  video: string
}

export type words = {
  name: string
}

export type PayloadMovieKeyWordsSuccess = {
  words: words[]
}

export const initialStateMovieDetails = {
  movieDetails: {} as MovieDetailsToStore,
  errorMessage: null as null | string,
  isLoading: true as boolean,
  videoIsLoading: true as boolean,
  video: '' as string,
  words: [] as words[],
}

export type MovieVideoRequest = {
  results: [{ key: string }]
}

export type MovieKeyWordsRequest = {
  keywords: [{ name: string }]
}
