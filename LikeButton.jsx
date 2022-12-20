import React, { useState } from "react";
const LikeButton = () => {
  const [likes, setLikes] = useState(100);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };
  const LikeStyle = {
    margin:"5px"
  }
  return (
    <>
      <button style = {LikeStyle}
        className={`like-button ${isClicked && "liked"}`}
        onClick={handleClick}
      >
        <img src="../images/emptylike.png" alt="" />
      </button>
      <p>{likes} people liked this!</p>
    </>
  );
};
export default LikeButton;