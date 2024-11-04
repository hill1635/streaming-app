import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import './Filters.scss';

function Filters(props) {
  const [ filters, setFilters ] = useState([]);

  useEffect(() => {
    setFilters(props.data);
  }, [ props.data ]);

  return (
    <div>
      {filters.map((filter) => {
        return (
          <Filter data={filter} />
        );
      })}
      <button>Apply</button>
    </div>
  );
}

export default Filters;