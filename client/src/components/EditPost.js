import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

export default function EditPost(props) {
  const [id, setId] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [postCategory, setPostCategory] = useState("");

  useEffect(() => {
    const postId = props.match.params.id;

    axios.get(`http://localhost:8070/post/${postId}`).then((res) => {
      const post = res.data.post;

      setId(post._id);
      setTopic(post.topic);
      setDescription(post.description);
      setPostCategory(post.postCategory);
      
    });
  }, [props.match.params.id]);

  function sendData(e) {
    e.preventDefault();

    const updatedPost = {
      topic,
      description,
      postCategory,
    };

    axios.put(`http://localhost:8070/post/update/${id}`, updatedPost).then(() => {
      alert("Post Updated");
    }).catch((err) => {
      alert(err);
    });
  }

  return (
    
    <div>
      <NavBar/>
    <div className="container" style={{ marginTop:"63px"}}>
      <form onSubmit={sendData}>
        <h2>Edit Post</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Topic</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Post Topic Here"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Post Description Here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Post Category Here"
            value={postCategory}
            onChange={(e) => setPostCategory(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success" style={{ marginTop: "15px" }}>
          <i className="far fa-check-square"></i>
          &nbsp; Update
        </button>
      </form>
    </div>
    </div>
  );
}
