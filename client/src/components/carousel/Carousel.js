import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import "./Carousel.scss";
import Filters from "../filters/Filters";

function Carousel(props) {
  const [filters, setFilters] = useState([]);
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    setFilters(props.filters);
  }, [props.filters]);

  useEffect(() => {
    setDisplay(props.display);
  }, [props.display]);

  const showMore = (e, current, step) => {
    e.preventDefault();
    setDisplay({ initial: current, step });
  };

  return (
    <section>
      <Filters data={filters} getData={props.getDataArray} setData={setData}/>
      {data.length > 0 && (
        <div>
          {data.slice(0, display.initial).map((item) => (
            <CarouselItem key={item.id} data={item} getIndex={props.getIndex} getDetails={props.getDetails} />
          ))}
          <button onClick={() => showMore(display.initial + display.step)}>Show More</button>
        </div>
      )}
      {data.length === 0 && 
        <p>No results</p>
      }
    </section>
  );
}

export default Carousel;