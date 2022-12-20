 Name: FeedPage (Final Sprint S2)
// Authors: Devin Augot, Luke Jones & Jacob Thomas
// Date Submitted: December 20th, 2022
import React from "react";
import { useState, useEffect } from "react";
export const UserLogged = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getUserData = async () => {
      const dataFromServer = await fetchPost();
      setUser(dataFromServer);
    };
    getUserData();
  }, []);
  const fetchPost = async () => {
    const res = await fetch(`http://localhost:5000/CurrentLogin`);
    const data = await res.json();
    return data;
  };
  return (
    <>
      {user.map((data) => {
        return `Welcome ${data.userName} 😁!`;
      })}
    </>
  );
};
export default UserLogged;
