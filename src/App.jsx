import { useEffect } from 'react'
import './App.css'
import { startLoadingMovies } from './store/movies';
import { useDispatch, useSelector } from 'react-redux';
import { CardMovie } from './movie/components/cardMovie/CardMovie';

export const App = () => {

  const dispatch = useDispatch();
  const { movies } = useSelector(state => state.movies)

  useEffect(() => {
    dispatch(startLoadingMovies());
  }, [])

  return (
    <div className='grid grid-cols-4 gap-4 p-8'>
      {movies.map(movie =><CardMovie key={movie.id} movie={movie}/> )}

    </div>
  )
}

