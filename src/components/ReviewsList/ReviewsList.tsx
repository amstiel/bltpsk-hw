'use client';

import { FC } from 'react';

import { useReviewsByMovieIdQuery } from '@/redux/services/reviews';

import { ReviewCard } from '@/components/ReviewCard/ReviewCard';

type ReviewsListProps = {
  movieId: string;
};

export const ReviewsList: FC<ReviewsListProps> = (props) => {
  const { movieId } = props;
  const { data: reviews } = useReviewsByMovieIdQuery(movieId);

  if (reviews === undefined) return;

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
