import React from "react";
import "./sign-in.css" 

const SignIn = () => (
    <div className="sign-in">
        <h1>Have an account already?</h1>
        <h3>Sign in here!</h3>

        <form>
            <label for="email">Email</label>
            <input type="email" placeholder="Enter your email"/>
            <label for="password">Password</label>
            <input type="password" placeholder="Enter your password"/>
            <label for="text">Project Name</label>
            <input type="text" placeholder="Enter project name"/>

            <button>SIGN IN</button>
        </form>
        <p>Don't have an account? Sign up</p>
    </div>
)

export default SignIn;