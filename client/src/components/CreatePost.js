import React,{useState} from "react";
import axios from "axios";
import NavBar from "./NavBar";

export default function CreatePost(){

    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [postCategory, setPostCategory] = useState("");
    

function sendData(a){

  a.preventDefault();
  const newPost = {
        topic,
        description,
        postCategory,
    }

    axios.post("http://localhost:8070/post/save", newPost).then(() =>{
        alert("Post Added")
    }).catch((err)=>{
        alert(err)
    })


} 
  return(

    <div>
<NavBar/>
        <div className="container" style={{ marginTop:"63px"}}>
            <form onSubmit={sendData}>
              <h2>Create New Post</h2>
              <br></br>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Topic</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Post Topic Here" 
    onChange={(e) =>{

        setTopic(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Post Description Here"
     onChange={(e) =>{

        setDescription(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Category</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Post Category Here"
     onChange={(e) =>{

        setPostCategory(e.target.value);
    }}/>
  </div>

  
  
  <button type="submit" className="btn btn-success" style={{marginTop:"15px"}}>
  <i className='far fa-check-square'></i>
  &nbsp; Save
  </button>
</form>
        </div>
        </div>
    )
}
