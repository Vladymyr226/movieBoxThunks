import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import MovieDetails from './containers/movieDetails/MovieDetails'
import Home from './containers/Home'
import NotFound from './components/notFoundPage/NotFoundPage'
import NowPlaying from './containers/NowPlaying'
import { rootReducer, RootState } from './store/rootReducer'
import './style/reset.scss'
import Layout from './components/layout/Layout'

export const store: Store<RootState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/popular" element={<Home />} />
          <Route path="movies/now-playing" element={<NowPlaying />} />
          <Route path="movie/id=:id" element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
