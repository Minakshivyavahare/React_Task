import axios from "axios";
import React, { useEffect, useState } from "react";

const Map = () => {
  const [userData, setUserData] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  const fetchUserDatas = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("USER RESPONSE: ", userData);
    setUserData(response.data);
  };
  const fetchUserPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("RESPONSE POSTS: ", response.data);
    setUserPosts(response.data);
  };
  useEffect(() => {
    fetchUserDatas();
    fetchUserPosts();
  }, []);

  return (
    <div>
      <div>
        {userData.length === 0
          ? "no data found"
          : userData.map((user) => {
              return (
                <>
                  <h3>{user.name}</h3>
                  {userPosts.map((post) =>
                    post.userId === user.id ? <p>{post.title}</p> : ""
                  )}
                </>
              );
            })}
      </div>
      <div></div>
    </div>
  );
};

export default Map;
