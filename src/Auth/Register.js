import React,{ useState } from "react"
import { Navigate } from 'react-router-dom'
import firebase from "../config"

const Register = () =>  {
    const [currentUser,setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try{
            firebase.auth().createUserWithEmailAndPassword(email.value,password.value);
            setCurrentUser(true);
        }catch(error){
            alert(error);
        }
    }

    if(currentUser){
        return<Navigate to="/user" />
    }

    return(
        <>
        <h1> Register</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
    )
}

export default Register;




