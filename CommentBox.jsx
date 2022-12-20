import React from "react";
import { useState, useEffect } from "react";
const CommentBox = () => {
  const [value, setValue] = useState("");
  const [line, SetLine] = useState("");
  const handleValue = async () => {
    setValue();
  };
  return (
    <div className="comments-box">
      <input type="text" placeholder="Add comment..." />
    </div>
  );
};
export default CommentBox;
