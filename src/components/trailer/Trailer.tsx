import YouTube, { YouTubeProps } from 'react-youtube'
import './trailer.scss'

const Trailer = ({ videoKey }: { videoKey: string }) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  const opts: YouTubeProps['opts'] = {
    height: '400',
    width: '800',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  return (
    <div className="container_trailer">
      <YouTube videoId={videoKey} opts={opts} onReady={onPlayerReady} />
    </div>
  )
}

export default Trailer
