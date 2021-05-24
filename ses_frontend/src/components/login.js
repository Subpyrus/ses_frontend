import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
     render() {
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
                    <li className="nav-item">
                         <Link className="nav-link" to={"/cleared"}>Cleared</Link>
                    </li>
                    </ul>
                    </div>
               </div>
               </nav>

               <form>
                    <h3>Sign In</h3>
                    <div className="form-group my-1">
                         <label>Username</label>
                         <input type="text" className="form-control" placeholder="Enter username" />
                    </div>
               
                    <div className="form-group my-1">
                         <label>One-Time ID</label>
                         <input type="text" className="form-control" placeholder="Enter One-Time ID" />
                    </div>         

                    <button type="submit" className="btn btn-primary btn-block my-3">Submit</button>
               </form>

          </div>
             
         );
     }
 }