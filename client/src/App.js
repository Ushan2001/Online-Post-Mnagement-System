import React, { Component } from 'react'
import {BrowserRouter, Route} from "react-router-dom"; 
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import PostDetails from './components/PostDetails'
import LoginInterface from './components/LoginInterface';
import SignUpInterface from './components/SignUpInterface';







export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
        
            <Route path="/home" component={Home}></Route>
            <Route path="/add" component={CreatePost}></Route>
            <Route path="/edit/:id" component={EditPost}></Route>
            <Route path="/post/:id" component={PostDetails}></Route>
            <Route path="/" exact component={LoginInterface}></Route>
            <Route path="/sign" component={SignUpInterface}></Route> 
            
           
        </BrowserRouter>
      
    )
  }
}
