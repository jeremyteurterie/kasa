import React from 'react';
import Ratings from '../components/Ratings';
import Tags from '../components/Tags';
import style from '../styles/DetailHeader.module.css';

const DetailHeader = ({ title, location, name, picture, tagList, rating }) => {
  return (
    <div className={style.headerContainer}>
      <div className={style.titleTagContainer}>
        <div className={style.titleWrap}>
          <h1>{title}</h1>
          <h2>{location}</h2>
        </div>
        <Tags tagList={tagList} />
      </div>
      <div className={style.profileRatingContainer}>
        <div className={style.profileWrap}>
          <span>{name}</span>
          <img src={picture} alt={name} />
        </div>
        <Ratings rating={rating} />
      </div>
    </div>
  );
};

export default DetailHeader;
