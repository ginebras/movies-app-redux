import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiAxios from '../../../common/apiAxios';

export const fetchMoviesApi = createAsyncThunk(
  'movies/fetchMoviesApi',
  async () => {
    const apiKey = 'c2b83a20';
    const movieName = 'Harry Potter';
    try {
      const response = await apiAxios.get(
        `?apiKey=${apiKey}&s=${movieName}&type=movie`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchShowsApi = createAsyncThunk(
  'shows/fetchShowsApi',
  async () => {
    const apiKey = 'c2b83a20';
    const movieName = 'Friends';
    try {
      const response = await apiAxios.get(
        `?apiKey=${apiKey}&s=${movieName}&type=series`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchSelectedProgram = createAsyncThunk(
  'movies/fetchAsynProgram',
  async (id) => {
    const apiKey = 'c2b83a20';
    const imdbId = id;
    try {
      const response = await apiAxios.get(
        `?apiKey=${apiKey}&i=${imdbId}&plot=full`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedProgram: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchMoviesApi.pending]: () => {
      console.log('Pending');
    },
    [fetchMoviesApi.fulfilled]: (state, { payload }) => {
      console.log('Fetch sucessfull');
      return { ...state, movies: payload };
    },
    [fetchMoviesApi.rejected]: () => {
      console.log('Rejected');
    },
    [fetchShowsApi.fulfilled]: (state, { payload }) => {
      console.log(state);
      console.log('Fetch sucessfull');
      return { ...state, shows: payload };
    },
    [fetchSelectedProgram.fulfilled]: (state, { payload }) => {
      console.log('Fetch sucessfull');
      return { ...state, selectedProgram: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getProgram = (state) => state.movies.selectedProgram;
export default movieSlice.reducer;
