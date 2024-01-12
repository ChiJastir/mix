import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchQuery: '',
    contentType: 'movie',
    years: '1860-2030',
    filter: 'votes.kp',
    genre: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        },
        setContentType: (state, action) => {
            state.contentType = action.payload
        },
        setYears: (state, action) => {
            state.years = action.payload
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setGenre: (state, action) => {
            state.genre = action.payload
        },
    },
})

export const { setSearchQuery, setContentType, setYears, setFilter, setGenre } = searchSlice.actions

export default searchSlice.reducer