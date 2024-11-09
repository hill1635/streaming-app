import React from 'react';
import './Carousel.scss';

function CarouselItem(props) {
  return (
    <span>
      <img src={props.data.image} alt={props.data.title} />
      <h3>{props.data.title}</h3>
      <p>{props.data.year}</p>
    </span>
  );
}

export default CarouselItem;