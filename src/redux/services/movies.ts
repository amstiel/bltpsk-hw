import { api } from './api';
import { Movie } from './types';

const moviesApi = api.injectEndpoints({
  endpoints: (build) => ({
    movies: build.query<Movie[], void>({
      query: () => 'movies',
    }),
  }),
  overrideExisting: false,
});

export const { useMoviesQuery } = moviesApi;
