import React, { Component } from "react";
import {Form} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class SignUp extends Component {
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
                    </ul>
                    </div>
               </div>
          </nav>

          <form className="my-3 p-3">
                 <h3>Sign Up</h3>
 
                 <div className="form-group my-1">
                     <label>First name</label>
                     <input type="text" className="form-control" placeholder="First name" />
                 </div>
 
                 <div className="form-group my-1">
                     <label>Last name</label>
                     <input type="text" className="form-control" placeholder="Last name" />
                 </div>
 
                 <div className="form-group my-1">
                     <label>Username</label>
                     <input type="text" className="form-control" placeholder="Enter username" />
                 </div>

                 <div className="form-group my-1">
                     <label>Email address</label>
                     <input type="email" className="form-control" placeholder="Enter email" />
                 </div>

                 <div className="form-group my-1">
                     <Form.Group controlId="exampleForm.ControlSelect1">
                         <Form.Label>Clearance Level</Form.Label>
                         <Form.Control as="select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                         </Form.Control>
                    </Form.Group>
                 </div>
 
                 <button type="submit" className="btn btn-primary btn-block my-3">Sign Up</button>
                 
             </form>

     </div>


         );
     }
 }