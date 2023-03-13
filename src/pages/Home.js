import React from 'react';
import useData from '../hooks/useData';
import Banner from '../components/Banner';
import mainBanner from '../assets/mainBanner.png';

const Home = () => {
  const data = useData();
  return (
    <>
      <Banner
        bannerImg={mainBanner}
        bannerTitle="Chez vous, partout et ailleurs"
        customClassName="homeBanner"
      />
    </>
  );
};

export default Home;
