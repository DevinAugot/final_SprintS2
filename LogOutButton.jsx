// Name: FeedPage (Final Sprint S2)
// Authors: Devin Augot, Luke Jones & Jacob Thomas
// Date Submitted: December 20th, 2022
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const LogOutButton = () => {
  const [users, setUsers] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {
      const dataFromServer = await fetchData();
      setUsers(dataFromServer);
    };
    fetchUsers();
  }, []);
  const fetchData = async () => {
    const res = await fetch(`http://localhost:5000/CurrentLogin`);
    const data = await res.json();
    return data;
  };
  const deleteLogin = async (id) => {
    await fetch(`http://localhost:5000/CurrentLogin/1`, {
      method: "DELETE",
    });
    setUsers(users, id);
  };
  return (
    <>
      <button
        type="submit"
        id="log-out"
        onClick={() =>
          deleteLogin() ? navigate("/Login") : console.log("failed")
        }
      >
        Log Out
      </button>
   
    </>
  );
};
export default LogOutButton;
