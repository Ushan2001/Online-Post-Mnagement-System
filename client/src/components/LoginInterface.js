import React, { useState } from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";


export default function LoginInterface() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8070/login", {
                username,
                password,
            });

            console.log(response.data);
            history.push("/home"); // Navigate to the home page
            window.location.reload(); // Reload the page
        } catch (err) {
            console.error("Error logging in:", err.message);
            alert("Error logging in:", err.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await handleLogin(); // Call the login function
        } catch (err) {
            console.error("Error handling login:", err.message);
        }
    };

    return (

        <div>
            <section className="vh-100" style={{backgroundColor: "#9A616D;"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: "1rem;"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleSubmit}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                    <span className="h1 fw-bold mb-0">Buying & Selling</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

                  <div className="form-outline mb-4">
                    <input type="text" id="form2Example17" className="form-control form-control-lg"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                  />
                   
                    <label className="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" 
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label" for="form2Example27">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>

                  
                  <p className="mb-5 pb-lg-2" style={{color:"#393f81"}}>Don't have an account? <a href="#!"
                      style={{color: "#393f81"}}>Register here</a></p>
                  
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
      
    );
}
