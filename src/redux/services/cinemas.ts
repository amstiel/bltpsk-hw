import { api } from './api';
import type { Cinema } from './types';

const cinemasApi = api.injectEndpoints({
  endpoints: (build) => ({
    cinemas: build.query<Cinema[], void>({
      query: () => 'cinemas',
    }),
  }),
  overrideExisting: false,
});

export const { useCinemasQuery } = cinemasApi;
