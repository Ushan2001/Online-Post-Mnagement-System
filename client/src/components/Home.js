import React, { Component } from 'react'
import axios from "axios";
import NavBar from './NavBar';
import PdfButton from './PdfButton';  


export default class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts:[]
        }
    }

    componentDidMount(){
        this.retrivePost()
    }

    retrivePost(){
        axios.get("http://localhost:8070/posts").then((res) =>{
            if(res.data.success){
                this.setState({
                    posts:res.data.existingPosts
                })

                console.log(this.state.posts)
            }
        })
    }

onDelete = (id) =>{
    axios.delete(`http://localhost:8070/post/delete/${id}`).then((res) =>{
        alert("Delete Susccessfully");
        this.retrivePost();
    })
}


filterData(posts, searchKey){
   
    const result =  posts.filter((post) =>
       post.topic.toLowerCase().includes(searchKey) ||
       post.description.toLowerCase().includes(searchKey) ||
       post.postCategory.toLowerCase().includes(searchKey)
    )
  
    this.setState({posts:result})
  
  }
  
  handleSearchArea = (e) =>{
     const searchKey =  e.currentTarget.value
  
     axios.get("http://localhost:8070/posts").then((res) =>{
              if(res.data.success){
                  
                this.filterData(res.data.existingPosts, searchKey)
  
                 
              }
          })
  }

  render() {
    return (
<div>
       <NavBar/>
       <div>
       </div>
      
        
      <div className='container' style={{ marginTop:"40px"}}>
         <div className='col-lg-3 mt-2 mb-2'>
            <input  className="form-control"
            type='search'
            placeholder='Serch'
            name="serchQuery"
            style={{marginLeft:"1000px"}}
            onChange={this.handleSearchArea}/>
            
           

         </div>
        

        <h2>All Posts</h2>
         <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Topic</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Post Category</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>

        <tbody>
            {this.state.posts.map((posts, index) =>(
                <tr key={index}>
                    <th scope='row'>{index+1}</th>
                    <td>
                        <a href= {`/post/${posts._id}`} style={{textDecoration:"none"}}>
                        {posts.topic}
                        </a>
                        </td>
                    <td>{posts.description}</td>
                    <td>{posts.postCategory}</td> 
                    <td>
                        <a className='btn btn-warning' href={`/edit/${posts._id}`}>
                            <i className='fas fa-edit'></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a className='btn btn-danger' href='# ' onClick={() => this.onDelete(posts._id)}>
                            <i className='fas fa-trash-alt'></i>&nbsp;Delete
                        </a>
                        &nbsp;<PdfButton post={posts} />
                        

                    </td>
                </tr>
            ))}
    
        </tbody>
         </table>
         

         <button className='btn btn-success'><a href='/add' style={{textDecoration:"none", color:"white"}}>Create New Post</a></button>
        
      </div>
      </div>
    )
  }
}
