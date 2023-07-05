import { useEffect, useRef, useState } from 'react'
import './App.css'
import { startLoadingMovies } from './store/movies';
import { useDispatch, useSelector } from 'react-redux';
import { CardMovie } from './movie/components/cardMovie/CardMovie';

export const App = () => {

  const dispatch = useDispatch();
  const moviesContainer = useRef();
  const { movies } = useSelector(state => state.movies)
  const [finalMovieCard, setFinalMovieCard] = useState()
  const [page, setPage] = useState(1)

  const onObserver = (entries, observer) => {
    entries.forEach(entrie => {
      if (entrie.isIntersecting && page < 100) setPage(page + 1)
    })
  }
  const observer = new IntersectionObserver(onObserver, { rootMargin: '0px', threshold: 1.0 })

  useEffect(() => {
    dispatch(startLoadingMovies(page));
  }, [page])

  useEffect(() => {
    let movieCards = Array.from(moviesContainer.current.children)
    setFinalMovieCard(movieCards[movieCards.length - 1])
  }, [movies])

  useEffect(() => {
    if (finalMovieCard) observer.observe(finalMovieCard)
  }, [finalMovieCard])

  return (
    <>

      <div ref={moviesContainer} className='grid grid-cols-4 gap-4 p-8'>
        {movies.map(movie => <CardMovie key={movie.id} movie={movie} />)}

      </div>
    </>
  )
}

