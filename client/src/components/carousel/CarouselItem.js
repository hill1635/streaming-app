import React, { useEffect, useCallback, useState } from 'react';
import './Carousel.scss';

function CarouselItem(props) {
  const [ item, setItem ] = useState({});

  const getData = useCallback(async (id) => {
    const res = await props.getData(id);
    console.log("res:", res);
    setItem(res);
  }, [props.data]);

  useEffect(() => {
    if (props.data.imdb_id) {
      getData(props.data.imdb_id);
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
        <button className="itemBtn" onClick={() => getData(props.data.imdb_id)}>More</button>
      </div>
    </span>
  );
}

export default CarouselItem;