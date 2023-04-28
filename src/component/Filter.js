import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Accordion, Card, Col } from "react-bootstrap";
// import image1 from "./bg1.jpg";

const Filter = () => {
  const [data, setData] = useState([]);
  const [dataPost, setDataPost] = useState([]);
  const [dataComment, setDataComment] = useState([]);

  async function fetchData() {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function postData() {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setDataPost(res.data);
      });
  }
  async function commentData() {
    await axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setDataComment(res.data);
      });
  }

  useEffect(() => {
    fetchData();
    postData();
    commentData();
  }, []);
  return (
    <>
      <h1>User details</h1>
      {data?.map((user) => {
        return (
          <div key={user.name}>
            <div style={{ border: "1px solid black" }}>
              <h1>Users List</h1>
              <h2>user id: {user.id}</h2>
              <h3>email: {user.email}</h3>
              <h3>username: {user.username}</h3>
              <br />
              <h1>{user.name}'s Posts</h1>

              <hr />

              {dataPost.map((post) => {
                if (post.userId === user.id) {
                  return (
                    <div>
                      <h2>{post?.title}</h2>
                      {dataComment.map((comment) => {
                        if (comment.postId === post.id) {
                          return <p>{comment.name}</p>;
                        } else {
                          return "";
                        }
                      })}
                    </div>
                  );
                } else {
                  return "";
                }
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Filter;
