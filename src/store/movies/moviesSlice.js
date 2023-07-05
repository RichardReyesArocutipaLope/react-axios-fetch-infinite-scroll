import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
}

export const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = [...state.movies, ...action.payload];
        },
    },
})

export const { setMovies, } = moviesSlice.actions