import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    moviesList: [],
    page: 1,
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setList: (state, action) => {
            state.moviesList = action.payload
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
    },
})

export const { setList, setPage } = moviesSlice.actions

export default moviesSlice.reducer