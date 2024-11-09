import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import "./Carousel.scss";
import Filters from "../filters/Filters";

function Carousel(props) {
  const [filters, setFilters] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setFilters(props.filters);
  }, [props.filters]);

  return (
    <section>
      <Filters data={filters} getData={props.getData} setData={setData} />
      {data.map((item) => {
        return (
          <CarouselItem data={item} />
        );
      })}
    </section>
  );
}

export default Carousel;