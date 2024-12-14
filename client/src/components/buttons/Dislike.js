import React from 'react';

function DislikeBtn(props) {
  return (
    <button
      className="dislikeBtn"
      onClick={props.dislike}>
      Dislike
    </button>
  );
}

export default DislikeBtn;