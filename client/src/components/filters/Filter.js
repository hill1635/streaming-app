import React, { useEffect, useState } from 'react';
import './Filters.scss';

function Filter(props) {
  const [ filter, setFilter ] = useState({ name: '', values: []});
  const [ selected, setSelected ] = useState([]);

  useEffect(() => {
    setFilter({...props.filter});
  }, [props]);
  
  const addOption = (option) => {
    var newArray = selected;
    newArray.push(option);
    setSelected([...newArray]);
  };

  const removeOption = (option) => {
    var newArray = selected.filter((item) => item !== option);
    setSelected([...newArray]);
  };

  const toggleSelected = (e, option) => {
    if (e.target.checked) {
      addOption(option);
    } else {
      removeOption(option);
    }
  };

  return (
    <div>
      <span>{filter.name}</span>
        <ul>
          {filter.values.map((value) => {
            return (
              <li>
                <input 
                  type="checkbox" 
                  checked={selected.includes(value)} 
                  onChange={(e) => toggleSelected(e, value)}
                />
                {value}
              </li>
            );
          })}
        </ul>
    </div>
  );
}

export default Filter;