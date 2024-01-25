import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar';

export default class PostDetails extends Component {
  constructor(props){
    super(props)

    this.state = {
      post:{}
    }
  }

  componentDidMount(){
 
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8070/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        })

        console.log(this.state.post)
      }
    })

  }

  render() {

    const {topic, description, postCategory } = this.state.post;

    return (
      <div>
        <NavBar/>
         <div style={{marginTop:"40px"}} className='container'>
          <h4>{topic}</h4>
          <hr/>
      <dl className='row'>
        <dt className='col-sm-3'>Description</dt>
        <dd className='col-sm-9'>{description}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Post Category</dt>
        <dd className='col-sm-9'>{postCategory}</dd>
        
      </dl>
      </div>
      </div>
    )
  }
}
