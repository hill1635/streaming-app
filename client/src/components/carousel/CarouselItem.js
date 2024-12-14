import React, { useEffect, useCallback, useState } from 'react';

import './Carousel.scss';

function CarouselItem(props) {
  const [ item, setItem ] = useState({});

  const getIndex = useCallback(async (id) => {
    const res = await props.getIndex(id);
    setItem(res);
  }, [props.data]);

  const getDetails = useCallback(async (id) => {
    const res = await props.getDetails(id);
    const combined = {...item, ...res};
    setItem(combined);
  }, [props.data, item]);

  useEffect(() => {
    if (props.data.imdb_id) {
      getIndex(props.data.imdb_id);
    }
  }, [props.data]);

  return (
    <span className="carouselItem">
      <div className="itemImg">
        <img src={item.imgSrc} alt={item.title} />
      </div>
      <div className="itemDetails">
        <h1 className="itemTitle">{item.title}</h1>
        <h3 className="itemDate">{item.date}</h3> 
        <p className="itemDescription">{item.description}</p>
        <p className="criticScore">{item.critic_score}</p>
        <p className="userRating">{item.user_rating}</p>
        <p className="itemGenres">{item.genres?.join(", ")}</p>
        <p className="itemNetworks">{item.networks?.join(", ")}</p>
        <button className="itemBtn" onClick={() => getDetails(props.data.imdb_id)}>More</button>
      </div>
    </span>
  );
}

export default CarouselItem;