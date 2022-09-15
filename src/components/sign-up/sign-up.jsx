import React from 'react';
import "./sign-up.css";
import content from '../../static';
import {useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
    fullname: yup.string().required().min(6),
    email: yup.string().required("Please enter a valid email"),
    password: yup.string().min(8).max(32).required("Please enter password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
     "Must be at least 8 characters long, must contain one uppercase character, one lowercase character, one numeric character, one special character")
});

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema),
        }

    )
        

    const onSubmit = data => console.log(data);
    const onError = errors => console.log(errors);
    

    return (
        <div className="sign-up">
            <h1>Don't have an account?</h1>
            <h3>Sign up here!</h3>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                {content.inputs.map((input,key) => {
                    return (
                        <div key={key}>
                            <label htmlFor={input.name}>{input.label}</label>
                            <br />
                            <input type={input.type} name={input.name} {...register(input.name)}/>
                            <p className="message">{errors[input.name]?.message}</p>
                        </div>
                    )
                })}
                

                <label for="options">User Type</label>
                <select id="options">
                    <option value="Developer">Developer</option>
                    <option value="Owner">Owner</option>
                </select>

                <button>SIGN UP</button>
            </form>
            <p>Have an account? Sign In</p>
        </div>
    )
    
}
    
export default SignUp;