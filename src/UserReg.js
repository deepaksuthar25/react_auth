import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from './Header';

function UserReg() {

    const Navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            Navigate('/')
        }
    }, [Navigate])

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const register = async () => {

       let item = { username, password, email }
        // console.warn(Username, Password, Email)

        let result = await fetch("http://localhost:5000/userReg", {

            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },

            body: JSON.stringify(item)
        })

        result = await result.json();
         console.warn(result.status);

        if(result.status === true){

            // localStorage.setItem("user-info",JSON.stringify(result));
            alert('Register Succesfull');
            Navigate('/userLogin')
        }

    }

    return (
        <>
            <Header />
            <h2>User Registration</h2>
            <div className="col-sm-6 offset-3">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
                <br />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                <br />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                <br />
                <button onClick={register} className="btn btn-primary">Register</button>
            </div>
        </>
    );
}

export default UserReg;