import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import DogApp from "./DogApp";

const DogCard = ({
  onXClick,
  onLikeClick,
  onCommentChange,
  imgSrc,
  countLikes,
  comment,
  id,
}) => {
  return (
    <div className="dog-card">
      <button className="cancel-button" onClick={() => onXClick(id)}>
        x
      </button>
      <img src={imgSrc} alt="dog" width="250px" />
      <div className="bottom-left">
        <button className="like-button" onClick={() => onLikeClick(id)}>
          ❤️
        </button>
        <p className="like-count">{countLikes}</p>
      </div>
      <input
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => onCommentChange(id, e.target.value)}
      />
      <p className="comment">{comment}</p>
    </div>
  );
};

export default DogCard;
