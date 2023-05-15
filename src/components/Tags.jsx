import React from 'react';
import style from '../styles/Tags.module.css';

const Tags = ({ tagList }) => {
  return (
    <div className={style.tagContainer}>
      {tagList.map((data) => (
        <span key={data}>{data}</span>
      ))}
    </div>
  );
};

export default Tags;
