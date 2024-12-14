import React, { useEffect, useState } from 'react';
import './Filters.scss';

function Filter(props) {
  const [ filter, setFilter ] = useState({ name: '', values: []});
  const [ selected, setSelected ] = useState();
  const [ expanded, setExpanded ] = useState(false);

  const toSnakeCase = (str) => {
		return str.toLowerCase().replace(/\s+/g, '_');
	};

  useEffect(() => {
    setFilter({...props.data});
  }, [props]);

  useEffect(() => {
    if (selected) {
      props.setSelected({...props.selected, [filter.key]: selected});
    }
  }, [selected]);

  const addOption = (option) => {
    var newArray = selected || [];
    newArray.push(option.key || option.id);
    setSelected([...newArray]);
  };

  const removeOption = (option) => {
    var newArray = selected.filter((item) => item !== option.key && item !== option.id);
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
    <div className="filterWrapper">
      <span className="filterName" onClick={() => setExpanded(!expanded)}>{filter.name}</span>
        {expanded && (
          <span className="filterOptions">
          {filter.type === "multi_select" &&
            <ul className="optionsList">
              {filter.values.map((value) => {
                return (
                  <li className="filterOption" key={value.key || toSnakeCase(value.name)}>
                    <input 
                      type="checkbox" 
                      checked={selected?.includes(value.key) || selected?.includes(value.id) || false} 
                      onChange={(e) => toggleSelected(e, value)}
                    />
                    {value.name}
                  </li>
                );
              })}
            </ul>
            }
            {filter.type === "select" &&
              <ul>
                {filter.values.map((value) => {
                  return (
                    <li onClick={() => setSelected(value.key)} key={value.key || toSnakeCase(value.name)}>{value.name}</li>
                  );
                })}
              </ul>
            }
            {filter.type === "number" &&
              <span>
                <input 
                  min={filter.min.toString()} 
                  max={filter.max.toString()}
                  step={filter.step.toString()}
                  onChange={(e) => setSelected(e.target.value)}
                  type='number'
                />
              </span>
            }
            {filter.type === "date" &&
              <span>
                <input onChange={(e) => setSelected(e.target.value.replace(/-/g, ""))} type='date' />
              </span>
            }
          </span>
        )}
    </div>
  );
}

export default Filter;