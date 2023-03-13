import React from 'react';
import useData from '../hooks/useData';
import Cards from '../components/Cards';
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
      <Cards data={data} />
    </>
  );
};

export default Home;
