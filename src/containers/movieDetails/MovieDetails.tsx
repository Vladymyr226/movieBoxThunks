import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/spinner/Spinner'
import { getMovieDetails, getMovieKeyWords, getMovieVideo } from '../../store/movieDetails/actions'
import { selectorMovieDetailsStore } from '../../store/movieDetails/selectors'
import FilmDetails from '../../components/filmDetails/FilmDetails'
import Trailer from '../../components/trailer/Trailer'
import './movieDetails.scss'

const MovieDetails = () => {
  const dispatch = useDispatch()

  const { MovieDetails, IsLoadingMovieDetails, MovieVideo, videoIsLoading } =
    useSelector(selectorMovieDetailsStore)

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      const tmp = parseInt(id)

      dispatch(getMovieDetails(tmp))
      dispatch(getMovieVideo(tmp))
      dispatch(getMovieKeyWords(tmp))
    }
  }, [])

  return (
    <>
      <main className="main">
        {IsLoadingMovieDetails ? (
          <Spinner />
        ) : (
          <>
            <FilmDetails
              backdropPath={MovieDetails.backdropPath}
              budget={MovieDetails.budget}
              genres={MovieDetails.genres}
              id={MovieDetails.id}
              originalLanguage={MovieDetails.originalLanguage}
              overview={MovieDetails.overview}
              popularity={MovieDetails.popularity}
              revenue={MovieDetails.revenue}
              runtime={MovieDetails.runtime}
              status={MovieDetails.status}
              tagline={MovieDetails.tagline}
              title={MovieDetails.title}
              voteAverage={MovieDetails.voteAverage}
              voteCount={MovieDetails.voteCount}
            />
            {videoIsLoading ? (
              <Spinner />
            ) : (
              <>
                <div className="header_video">
                  <h2>Трейлер</h2>
                </div>
                <Trailer videoKey={MovieVideo} />
              </>
            )}
          </>
        )}
      </main>
    </>
  )
}

export default MovieDetails
