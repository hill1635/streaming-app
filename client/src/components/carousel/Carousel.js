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

  return (
    <section>
      <Filters data={filters} getData={props.getDataArray} setData={setData} setDisplay={setDisplay}/>
        {data.slice(0, display).map((item) => {
        return (
            <CarouselItem data={item} getIndex={props.getIndex} getDetails={props.getDetails} />
        );
        })}
    </section>
  );
}

export default Carousel;