import { useEffect, useState } from 'react'
import './App.css'
import { startLoadingMovies } from './store/movies';
import { useDispatch, useSelector } from 'react-redux';
import { CardMovie } from './movie/components/cardMovie/CardMovie';

export const App = () => {

  const dispatch = useDispatch();
  const { movies } = useSelector(state => state.movies)
  const [page, setPage] = useState(1)

  const onPageNext = () => {
    if (page < 100) setPage(page + 1)
  }

  const onPagePrev = () => {
    if (page > 1) setPage(page - 1)
  }

  useEffect(() => {
    dispatch(startLoadingMovies(page));
  }, [page])

  return (
    <>
      <button
        onClick={onPagePrev}
        className='m-2 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm'>PREV</button>
      <button
        onClick={onPageNext}
        className='m-2 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm'>NEXT</button>
      <h1>{page}</h1>
      <div className='grid grid-cols-4 gap-4 p-8'>
        {movies.map(movie => <CardMovie key={movie.id} movie={movie} />)}

      </div>
    </>
  )
}

