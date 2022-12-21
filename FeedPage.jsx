// Name: FeedPage (Final Sprint S2)
// Authors: Devin Augot, Luke Jones & Jacob Thomas
// Date Submitted: December 21, 2022
import React from "react";
import { useState, useEffect } from "react";
import LikeButton from "../components/LikeButton";
import CommentBox from "./CommentBox";
import Nav from "../components/Nav";
import UserLogged from "../components/UserLogged";
import LogOutButton from "../components/LogOutButton";
import Header from "./Header";
const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchPosts();
      setPosts(dataFromServer);
    };
    const getUserData = async () => {
      const dataFromServer = await fetchPost();
      const test = await dataFromServer.map((data) => {
        var stringUser = data.userName.toString();
        return stringUser;
      });
      setUser(test);
    };
    getUserData();
    getData();
  }, []);
  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/posts");
    const data = await res.json();
    return data;
  };
  const fetchPost = async () => {
    const res = await fetch(`http://localhost:5000/CurrentLogin`);
    const data = await res.json();
    return data;
  };
  const addPost = async (post) => {
    const res = await fetch(`http://localhost:5000/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const data = await res.json();
    setPosts([...posts, data]);
  };
  const grabUser = async (user) => {
    user.map((data) => {
      user = data.userName;
      return setUser(user);
    });
    grabUser();
  };
  return (
    <>
      <Nav />
      <br />
      <div className="user-logged">
        <UserLogged />
      </div>
      <div className="Log-out-feed">
        {" "}
        <LogOutButton></LogOutButton>
        <p id="intro">
          Hit the log out button above to log out & bring you back to the Login
          Screen!
        </p>
      </div>
      
      <br />
      
      <div className="container-feed">
        <div className="feed-header">
        <Header />
        </div>
        <div className="container">
        <form onSubmit={() => addPost({ user, img, description, tag })}>
          <p id="intro">
            Provide your URL link for the image youd like to post, add your
            description of your issue & specify the type of issue and hit the
            create post button below!
          </p>
          <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="text"
            id="url"
            placeholder="Image URL"
          />

          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            id="description"
            placeholder="Description"
          />
          <select onInput={(e) => setTag(e.target.value)} name="Tags" id="tags">
            <option className="help" value="help">
              Help
            </option>
            <option value="tip">Tip</option>
            <option value="solution">Solution</option>
          </select>
          <button type="submit" className="btn-login">
            Create Post
          </button>
          
          
        

          
        </form>
        </div>
      </div>
      
        <div className="feed">
        {posts.map((data) => {
          return (
            <>
            
            <div className="post-div">
              <div className="post">
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  width="50"
                  height="50"
                  className="avatar"
                />
                <h3>{data.user}</h3>
                <img
                  src="../images/finalLogo.png"
                  alt=""
                  width="50"
                  height="50"
                  className="logo"
                />
                <img
                  className="image"
                  src={data.img}
                  width="200"
                  height="200"
                />
                <LikeButton />
                <p className="tag">Tags</p>
                <p className="description">{data.description}</p>
                <p className="tag-post">{data.tag}</p>
                <CommentBox />
                <div className="cmt-btn">
                  <button className="comment-button">Add..</button>
                </div>
                <br />
              </div>
              </div>
             
            </>
          );
        })}
        
      </div>
      
      
    
    </>
  );
};
export default FeedPage;
