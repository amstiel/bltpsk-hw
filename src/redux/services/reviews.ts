import { api } from './api';
import { Review } from './types';

const moviesApi = api.injectEndpoints({
  endpoints: (build) => ({
    reviews: build.query<Review[], void>({
      query: () => 'reviews',
    }),
    reviewsByMovieId: build.query<Review[], string>({
      query: (id) => `reviews?movieId=${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useReviewsByMovieIdQuery } = moviesApi;
