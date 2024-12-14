import React from 'react';

function AddBtn(props) {
  return (
    <button
      className="addBtn"
      onClick={props.add}>
      Add
    </button>
  );
}

export default AddBtn;