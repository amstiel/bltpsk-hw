import { api } from './api';
import { Movie } from './types';

const moviesApi = api.injectEndpoints({
  endpoints: (build) => ({
    movies: build.query<Movie[], void>({
      query: () => 'movies',
    }),
    movieById: build.query<Movie, string>({
      query: (id) => `movie?movieId=${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useMoviesQuery, useMovieByIdQuery } = moviesApi;
