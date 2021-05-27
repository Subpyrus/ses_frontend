import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const SignUp = () => {

    const [clearanceList, setClearanceList] = useState(null);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [username, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [clearancelevel, setClearance] = useState("")
    const history = useHistory();
    

    useEffect(() => {
        fetch('https://ses2021.herokuapp.com/api/v1/ClearanceLevel')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setClearanceList(data);
                setClearance(data[3].id)
            })   
    }, [])

    

    
    const makeid = (length) => {
        var result           = [];
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result.push(characters.charAt(Math.floor(Math.random() * 
     charactersLength)));
       }
       return result.join('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let name = firstName + " " + lastName;
        let onetimeid = makeid(12);
        const user = { name, username, onetimeid, clearancelevel }
        console.log(user);
        
        fetch('https://ses2021.herokuapp.com/api/v1/Users', {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }).then(() => {
            history.push("/");
        })

        var data = { username: username, secret: password };

        var config = {
        method: "post",
        url: "https://api.chatengine.io/users/",
        headers: {
        "PRIVATE-KEY": "eace8bba-927b-41cd-af50-5d71278f2bbf",
        },
        data: data,
        };
        
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));


        localStorage.setItem("userid", response.data.id);
        window.location.replace("/signIn");
        console.log(response.data.id);

        })
        .catch(function (error) {
            console.log(error);
        });   

    
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-in"}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

            <form className="my-3 p-3" onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group my-1">
                    <label>First name</label>
                    <input type="text" required className="form-control" placeholder="First name" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                </div>

                <div className="form-group my-1">
                    <label>Last name</label>
                    <input type="text" required className="form-control" placeholder="Last name" value={lastName} onChange={(e) => setlastName(e.target.value)} />
                </div>

                <div className="form-group my-1">
                    <label>Username</label>
                    <input type="text" required className="form-control" placeholder="Enter username" value={username} onChange={(e) => setuserName(e.target.value)} />
                </div>

                <div className="form-group my-1">
                    <label>Clearance Level</label>
                    <br />
                    <select className="form-control" value={clearancelevel} onChange={(e) => setClearance(e.target.value)}>
                        {clearanceList && clearanceList.map((level) => (
                            <option key={level.id} value={level.id}>{level.Code} -- {level.Description}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary btn-block my-3">Sign Up</button>

            </form>

        </div>


    );



}

export default SignUp;