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
    setDisplay(props.display.initial);
  }, [props.display]);
  
  return (
    <section>
      <Filters data={filters} getData={props.getDataArray} setData={setData}/>
      {data.length > 0 && (
        data.slice(0, display).map((item) => {
          return (
              <CarouselItem key={item.id} data={item} getIndex={props.getIndex} getDetails={props.getDetails} />
          );
        }))}
        {data.length === 0 && 
          <p>No results</p>
        }
    </section>
  );
}

export default Carousel;