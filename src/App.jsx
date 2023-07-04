import { useEffect } from 'react'
import './App.css'
import { startLoadingMovies } from './store/movies';
import { useDispatch } from 'react-redux';

export const App = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(startLoadingMovies());
  }, [])

  return (
    <div className='text-3xl'>App</div>
  )
}

