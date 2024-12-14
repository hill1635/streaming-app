import React from 'react';

function RemoveBtn(props) {
  return (
    <button
      className="removeBtn"
      onClick={props.remove}>
      Remove
    </button>
  );
}

export default RemoveBtn;