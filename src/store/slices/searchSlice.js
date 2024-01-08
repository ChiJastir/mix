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
        searchQuery: (state, action) => {
            state.searchQuery = action.payload
        },
        contentType: (state, action) => {
            state.contentType = action.payload
        },
        years: (state, action) => {
            state.years = action.payload
        },
        filter: (state, action) => {
            state.filter = action.payload
        },
        genre: (state, action) => {
            state.genre = action.payload
        },
    },
})

export const { searchQuery, contentType, years, filter, genre } = searchSlice.actions

export default searchSlice.reducer