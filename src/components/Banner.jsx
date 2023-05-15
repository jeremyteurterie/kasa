import React from 'react';
import style from '../styles/Banner.module.css';

const Banner = ({ bannerImg, bannerTitle }) => {
  return (
    <div className={style.bannerContainer}>
      <div className={style.imageWrap}>
        <img className={style.bannerImg} src={bannerImg} alt={bannerTitle} />
      </div>
      <h1 className={style.bannerTitle}>{bannerTitle}</h1>
    </div>
  );
};

export default Banner;
