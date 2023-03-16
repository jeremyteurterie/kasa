import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useDataId from '../hooks/useDataId';
import DetailHeader from '../components/DetailHeader';
import Dropdown from '../components/Dropdown';
import Gallery from '../components/Gallery';
import style from '../styles/Location.module.css';

const Location = () => {
  const { locationId } = useParams();
  const navigate = useNavigate();

  const [locations, setLocations] = useState({
    title: '',
    location: '',
    host: { name: '', picture: '' },
    rating: '',
    tags: [],
    description: '',
    equipments: [],
    pictures: [],
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const matchedLocation = useDataId(locationId);
    if (!matchedLocation) {
      navigate('/404');
    } else {
      setLocations(matchedLocation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    title,
    location,
    host,
    rating,
    tags,
    description,
    equipments,
    pictures,
  } = locations;

  const equitmentList = equipments.map((equip) => <li key={equip}>{equip}</li>);

  return (
    <div>
      <Gallery imageArray={pictures} description={description} />
      <DetailHeader
        title={title}
        location={location}
        name={host.name}
        picture={host.picture}
        tagList={tags}
        rating={rating}
      />

      <div className={style.dropDownContainer}>
        <Dropdown
          title="Description"
          paragraphe={description}
          wrapClassName={style.dropDownWrap}
        />
        <Dropdown
          title="Equipments"
          paragraphe={equitmentList}
          wrapClassName={style.dropDownWrap}
        />
      </div>
    </div>
  );
};

export default Location;
