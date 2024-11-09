import React, { useEffect, useState } from 'react';
import './Filters.scss';

function Filter(props) {
  const [ filter, setFilter ] = useState({ name: '', values: []});
  const [ selected, setSelected ] = useState([]);
  const [ expanded, setExpanded ] = useState(false);

  const toSnakeCase = (str) => {
		return str.toLowerCase().replace(/\s+/g, '_');
	};

  useEffect(() => {
    setFilter({...props.data});
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
      <span onClick={() => setExpanded(!expanded)}>{filter.name}</span>
        {expanded &&
          filter.type === "multi_select" &&
            <ul>
              {filter.values.map((value) => {
                return (
                  <li key={value.key || toSnakeCase(value.name)}>
                    <input 
                      type="checkbox" 
                      checked={selected.includes(value)} 
                      onChange={(e) => toggleSelected(e, value)}
                    />
                    {value.name}
                  </li>
                );
              })}
            </ul>
        }
    </div>
  );
}

export default Filter;