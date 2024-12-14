import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import './Filters.scss';

function Filters(props) {
  const [ filters, setFilters ] = useState([]);
  const [ selected, setSelected ] = useState([]);
  const [ opened, setOpened ] = useState("");

  useEffect(() => {
    setFilters(props.data);
  }, [ props.data ]);

  const applyFilters = async (input) => {
    var resData = await props.getData(input);
    props.setData(resData);
  };

  const toggleFilter = (filterKey) => {
    if (opened !== filterKey) {
      setOpened(filterKey);
      return true;
    } else {
      setOpened("");
      return false;
    }
  };

  return (
    <div className="filter">
      <div className="filtersWrapper">
        {filters.map((filter) => {
          return (
            <Filter
              key={filter.key}
              data={filter}
              setSelected={setSelected}
              selected={selected} 
              toggle={() => toggleFilter(filter.key)}
              opened={opened}/>
          );
        })}
      </div>
      <button onClick={() => applyFilters(selected)}>Apply</button>
    </div>
  );
}

export default Filters;