'use client';

import { FC } from 'react';

import { useMovieByIdQuery } from '@/redux/services/movies';
import { useReviewsByMovieIdQuery } from '@/redux/services/reviews';

import { ReviewCard } from '@/components/ReviewCard/ReviewCard';

type ReviewsListProps = {
  movieId: string;
};

export const ReviewsList: FC<ReviewsListProps> = (props) => {
  const { movieId } = props;
  const { data: reviews } = useReviewsByMovieIdQuery(movieId);
  const { data: movieDetails } = useMovieByIdQuery(movieId);

  if (reviews === undefined || movieDetails === null) return;

  return reviews.map((review) => (
    <ReviewCard
      key={review.id}
      rating={review.rating}
      name={review.name}
      text={review.text}
      avatarUrl={review.avatarUrl}
    />
  ));
};
