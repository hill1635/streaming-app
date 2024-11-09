import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import './Filters.scss';

function Filters(props) {
  const [ filters, setFilters ] = useState([]);
  const [ selected, setSelected ] = useState([]);

  useEffect(() => {
    setFilters(props.data);
  }, [ props.data ]);

  const applyFilters = async (input) => {
    var resData = await props.getData(input);
    props.setData(resData);
  };

  return (
    <div>
      {filters.map((filter) => {
        return (
          <Filter data={filter} setSelected={setSelected} selected={selected} />
        );
      })}
      <button onClick={() => applyFilters(selected)}>Apply</button>
    </div>
  );
}

export default Filters;