import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function SignUpInterface() {
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8070/signup", {
                username,
                password,
            });

            console.log(response.data);
            alert("Successfully signing up");
            history.push("/"); // Navigate to the login page
            window.location.reload(); // Reload the page
        } catch (error) {
            console.error("Error signing up:", error.message);
            alert("Error signing up", error.message);
        }
    };

    return (
        <div className="container" style={{ marginTop: "40px" }}>
            <h2>Register Here</h2>
            <br></br>
            <form onSubmit={handleSignUp}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        User Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter User Name"
                        pattern="[a-z]{1,15}"
                        title="Username should only contain lowercase letters. e.g. john"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: "15px" }}>
                    <i className="far fa-check-square"></i>
                    &nbsp;Signup
                </button>
                &nbsp; &nbsp;
                <Link to={"/"}>Login Page</Link>
            </form>
        </div>
    );
}
