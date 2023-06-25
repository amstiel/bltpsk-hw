import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  tagTypes: ['Proforma', 'VesselCall', 'Routes'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT,
  }),
  endpoints: () => ({}),
});
