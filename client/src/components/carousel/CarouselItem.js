import React, { useEffect, useCallback, useState } from 'react';
import { AddBtn, RemoveBtn, LikeBtn, DislikeBtn } from '../buttons';

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

  const changeStatus = (input) => {
    var status = input !== item.status ? input : "";
    setItem({...item, status: status});
  };

  useEffect(() => {
    if (props.data.imdb_id) {
      getIndex(props.data.imdb_id);
    }
  }, [props.data]);

  useEffect(() => {
    console.log("item:", item);
  }, [ item ]);

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
        <LikeBtn like={() => changeStatus("liked")}/>
        <DislikeBtn dislike={() => changeStatus("disliked")}/>
        {item.status !== "add" &&
          <AddBtn add={() => changeStatus("add")}/>
        }
        {item.status === "add" &&
          <RemoveBtn remove={() => setItem({...item, status: ""})}/>
        }
      </div>
    </span>
  );
}

export default CarouselItem;