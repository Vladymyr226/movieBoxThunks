import { MovieDetailsRequestResult, MovieDetailsToStore } from '../types/movieDetails'

export const transformMovieDetailsData = (data: MovieDetailsRequestResult): MovieDetailsToStore => {
  return {
    backdropPath: data.backdrop_path,
    budget: data.budget,
    genres: data.genres,
    id: data.id,
    originalLanguage: data.original_language,
    overview: data.overview,
    popularity: data.popularity,
    revenue: data.revenue,
    runtime: data.runtime,
    status: data.status,
    tagline: data.tagline,
    title: data.title,
    voteAverage: data.vote_average,
    voteCount: data.vote_count,
  }
}
