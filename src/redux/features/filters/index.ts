import { createSlice } from '@reduxjs/toolkit';

export type FiltersState = {
  name?: string;
  genreId?: string;
  cinemaId?: string;
};

const initialState: FiltersState = {};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setName: (state, { payload }) => {
      state.name = payload;
    },
    setGenreId: (state, { payload }) => {
      state.genreId = payload;
    },
    setCinemaId: (state, { payload }) => {
      state.cinemaId = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;
