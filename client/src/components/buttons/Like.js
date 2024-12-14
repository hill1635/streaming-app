import React from 'react';

function LikeBtn(props) {
  return (
    <button
      className="likeBtn"
      onClick={props.like}>
      Like
    </button>
  );
}

export default LikeBtn;