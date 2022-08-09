const routes = {
  movieDetails: `/movie/`,
  videos: `movie/`,
  keyWords: `movie/`,
  images: `https://image.tmdb.org/t/p/w220_and_h330_face`,
  imagesDetails: `https://www.themoviedb.org/t/p/w300_and_h450_bestv2`,
  searchVideos: `search/movie?api_key=${process.env.REACT_APP_BASE_API_KEY}&query=`,
}

export default routes
