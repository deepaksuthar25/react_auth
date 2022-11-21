import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from './Header';



function UserLogin() {

    const Navigate = useNavigate();


    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            Navigate('/')
        }
    }, [Navigate])

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const login = async () => {

        let item = { email, password }
        // console.warn( Password, Email)

        let result = await fetch("http://localhost:5000/userAuth", {

            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },

            body: JSON.stringify(item)
        })

        result = await result.json();
        // console.warn(result.data);

        if (result.status === true) {

            localStorage.setItem("user-info",JSON.stringify(result.data));
            alert('Login Succesfull');
            Navigate('/')
        }
    }

    return (
        <>
            <Header />
            <h2> User Login</h2>

            <div className="col-sm-6 offset-3">
                <br />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                <br />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                <br />
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>

        </>
    );
}

export default UserLogin;