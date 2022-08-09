import './notFoundPage.scss'

const NotFound = () => {
  return (
    <div>
      <h1 className="container_not_found_page"> Oops! Page not found!</h1>
      <a className="link_not_found_page" href="/movies/popular">
        Back to home page
      </a>
    </div>
  )
}

export default NotFound
