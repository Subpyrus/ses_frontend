import React from "react";
import { Link, useHistory } from "react-router-dom";
import publicIp from "public-ip";
import { useEffect, useState } from 'react';
import bcrypt from 'bcryptjs';
import axios from 'axios';


const projectID = "400c5113-ad86-4b72-9fa7-50e6d6b56603";

const Login = () => {

     const [users, setUsers] = useState(null);
     const [user, setUser] = useState(null);
     const [oneTimeID, setOTID] = useState("");
     const [username, setUsername] = useState("");
     const [passwordToAdd, setPasswordToAdd] = useState("");
     const [ip, setIP] = useState("");
     const [passwordLog, setPasswordLog] = useState("");
     const [usernameLog, setUsernameLog] = useState("");
     const [isPending, setIsPending] = useState(false);
     const [isSuccess, setIsSuccess] = useState(false);
     const [isFailure, setIsFailure] = useState(false);
     const [isFailure2, setIsFailure2] = useState(false);
     const history = useHistory();

     const getClientIp = async () => await publicIp.v4({
          fallbackUrls: ["https://ifconfig.co/ip"]
     });

     useEffect(() => {
          getClientIp().then(setIP)
          fetch('https://ses2021.herokuapp.com/api/v1/Users')
               .then(res => {
                    return res.json();
               })
               .then(data => {
                    setUsers(data);
               });
               
               checkLocal();
               
     }, [])

     const findUser = (usersToSearch, usernameToFind) => {
          for (var i = 0; i < usersToSearch.length; i++) {
               if (usersToSearch[i].UserName === usernameToFind) {
                    return usersToSearch[i];
               }
          }
     }


     const checkLocal = () => {
          if (localStorage.getItem('user')) {
               history.push("/cleared");
          }
     }

     const handleSubmit = (e) => {
          setIsPending(true);
          e.preventDefault();

          
         const  private_key = 'eace8bba-927b-41cd-af50-5d71278f2bbf';

          if (username!== '') {
               console.log(username);
               axios({
                   method: 'POST',
                   url: 'https://api.chatengine.io/users/',
                   headers: {
                       'PRIVATE-KEY': private_key
                   },
                   data: {
                       "username": username,
                       "secret": passwordToAdd
                   }
               });
           }



          let userP = findUser(users, username);



          if (userP.OneTimeId === oneTimeID) {
               setIsPending(false);
               setIsSuccess(true);
               var salt = bcrypt.genSaltSync(10);
               var hash = bcrypt.hashSync(passwordToAdd,salt)
               userP.password = hash;
               userP.IP = ip;
               setUser(userP);
               setOTID("");
               setUsername("");
               setPasswordToAdd("");
               setTimeout(() => {
                    setIsSuccess(false);
               }, 3000)
          } else {
               setIsPending(false);
               setIsFailure(true);
               setOTID("");
               setUsername("");
               setPasswordToAdd("");
               setTimeout(() => {
                    setIsFailure(false);
               }, 3000)
          }
     }

     //
     
     const private_key = "eace8bba-927b-41cd-af50-5d71278f2bbf";
     //

     const handleSubmit2 = async (e) => {
          e.preventDefault()

          console.log(username, passwordLog);
        const authObject = { 'Project-ID': projectID, 'User-Name': usernameLog, 'User-Secret': passwordLog };
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', usernameLog);
            localStorage.setItem('password', passwordLog);
          
            window.location.reload();
            alert("Successfully passed");
        } catch (err) {
            alert('Oops, incorrect credentials.');
        };
          
         

             ////////
          if (bcrypt.compareSync(passwordLog,user.password) && user.UserName === usernameLog) {
               localStorage.setItem('user', JSON.stringify(user));
               history.push("/cleared");
          } else {
               setIsFailure2(true);
               setOTID("");
               setUsernameLog("");
               setPasswordLog("");
               setTimeout(() => {
                    setIsFailure2(false);
               }, 3000)
          }

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

               <form onSubmit={handleSubmit}>
                    <h3>Finish The Register</h3>
                    <div className="form-group my-1">
                         <label>Username</label>
                         <input type="text" className="form-control" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="form-group my-1">
                         <label>One-Time ID</label>
                         <input type="text" className="form-control" placeholder="Enter One-Time ID" value={oneTimeID} onChange={(e) => setOTID(e.target.value)} />
                    </div>

                    <div className="form-group my-1">
                         <label>Password</label>
                         <input type="password" className="form-control" placeholder="Enter a password to complete registration" value={passwordToAdd} onChange={(e) => setPasswordToAdd(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block my-3">Verify One Time Id</button>
                    {isPending && <div>Checking the One Time Id...</div>}
                    {isSuccess && <div>Success</div>}
                    {isFailure && <div>Failure</div>}
               </form>

               <form onSubmit={handleSubmit2}>
                    <h3>Sign In</h3>
                    <div className="form-group my-1">
                         <label>Username</label>
                         <input type="text" className="form-control" placeholder="Enter username" value={usernameLog} onChange={(e) => setUsernameLog(e.target.value)} />
                    </div>

                    <div className="form-group my-1">
                         <label>Password</label>
                         <input type="password" className="form-control" placeholder="Enter your password" value={passwordLog} onChange={(e) => setPasswordLog(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block my-3">Login</button>
                    {isFailure2 && <div>Failure</div>}
               </form>

          </div>

     );
}

export default Login;