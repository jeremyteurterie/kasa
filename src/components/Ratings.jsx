import React from 'react';
import { ReactComponent as StarIcon } from '../assets/star.svg';
import style from '../styles/Ratings.module.css';

const Ratings = ({ rating }) => {
  const maxRating = 5;
  const numberOfStars = parseInt(rating, 10);
  const numberOfEmptyStar = maxRating - numberOfStars;
  const starIcons = Array.from({ length: numberOfStars }, (_, i) => (
    <StarIcon key={i} className={style.star} />
  ));
  const emptyStarIcons = Array.from({ length: numberOfEmptyStar }, (_, i) => (
    <StarIcon key={i} className={style.emptyStar} />
  ));

  return (
    <div className={style.starWrap}>
      {starIcons}
      {emptyStarIcons}
    </div>
  );
};

export default Ratings;
