import React, { useEffect, useCallback, useState } from 'react';
import './Carousel.scss';

function CarouselItem(props) {
  const [ item, setItem ] = useState({});

  const getIndex = useCallback(async (id) => {
    const res = await props.getIndex(id);
    console.log("res:", res);
    setItem(res);
  }, [props.data]);

  const getDetails = useCallback(async (id) => {
    const res = await props.getDetails(id);
    console.log("res:", res);
  }, [props.data]);

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
        <button className="itemBtn" onClick={() => getDetails(props.data.imdb_id)}>More</button>
      </div>
    </span>
  );
}

export default CarouselItem;