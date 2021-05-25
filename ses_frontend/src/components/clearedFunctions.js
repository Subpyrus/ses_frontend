import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

const Cleared = () => {

     const [result, setResult] = useState("");
     const [number, setNumber] = useState("");
     const [nroot, setNRoot] = useState("");
     const [user, setUser] = useState("");
     const history = useHistory();

     useEffect(() => {
          if (!localStorage.getItem('user')) {
               history.push("/");
          } else {
               let LoggedUser = JSON.parse(localStorage.getItem('user'));
               setUser(LoggedUser);
          }
     }, [])

     const squareRoot = () => {
          setResult("Result: " + (Math.sqrt(number)));
     }

     const cubicRoot = () => {
          setResult("Result: " + (Math.cbrt(number)));
     }

     const parameterizedRoot = () => {
          var result = nthroot(number, nroot);
          setResult("Result: " + result);
     }

     const nthroot = (x, n) => {
          let ng = n % 2;
          if ((ng === 1) || x < 0)
               x = -x;
          var r = Math.pow(x, 1 / n);
          n = Math.pow(r, n);

          if (Math.abs(x - n) < 1 && (x > 0 === n > 0))
               return ng ? -r : r;
     }

     const clearSession = () => {
          localStorage.removeItem('user');
          history.push("/");
     }

     if (user.ClearanceLevel === "6B397605-1CA9-44C5-89A3-1DC187C59B8B") {
          return (

               <div>
                    <h3>Cleared Levels</h3>
                    <div className="form-group my-1">
                         <label>Number to Test</label>
                         <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} name="number" id="number" className="form-control" placeholder="Enter the number to test" />
                    </div>
                    <button onClick={squareRoot} className="btn btn-primary btn-block my-3">Level 1 - Square Root</button>
                    <button onClick={cubicRoot} className="btn btn-primary btn-block my-3">Level 2 - Cubic Root</button>

                    <div className="form-group my-1">
                         <label>N-Root</label>
                         <input type="text" value={nroot} onChange={(e) => setNRoot(e.target.value)} name="nroot" id="nroot" className="form-control" placeholder="Enter the root you want to test" />
                    </div>
                    <button onClick={parameterizedRoot} className="btn btn-primary btn-block my-3">Level 3 - Parameterized N-Root </button>

                    <div className="form-group my-1">
                         <p id="result" name="result">{result}</p>
                    </div>

                    <button onClick={clearSession} className="btn btn-primary btn-block my-3">Clear Session</button>
               </div>

          );
     } else if (user.ClearanceLevel === "C14AC0B9-5ECC-4857-AE3A-A7B4F3018DCD") {
          return (

               <div>
                    <h3>Cleared Levels</h3>
                    <div className="form-group my-1">
                         <label>Number to Test</label>
                         <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} name="number" id="number" className="form-control" placeholder="Enter the number to test" />
                    </div>
                    <button onClick={squareRoot} className="btn btn-primary btn-block my-3">Level 1 - Square Root</button>
                    <button onClick={cubicRoot} className="btn btn-primary btn-block my-3">Level 2 - Cubic Root</button>

                    <div className="form-group my-1">
                         <p id="result" name="result">{result}</p>
                    </div>

                    <button onClick={clearSession} className="btn btn-primary btn-block my-3">Clear Session</button>

               </div>

          );

     } else if (user.ClearanceLevel === "C48168EC-3451-4051-8E41-3B8FF9B9B4E3") {
          return (

               <div>
                    <h3>Cleared Levels</h3>
                    <div className="form-group my-1">
                         <label>Number to Test</label>
                         <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} name="number" id="number" className="form-control" placeholder="Enter the number to test" />
                    </div>
                    <button onClick={squareRoot} className="btn btn-primary btn-block my-3">Level 1 - Square Root</button>
                    
                    <div className="form-group my-1">
                         <p id="result" name="result">{result}</p>
                    </div>

                    <button onClick={clearSession} className="btn btn-primary btn-block my-3">Clear Session</button>

               </div>

          );

     } else {
          return (

               <div>
                    <h3>Cleared Levels</h3>
                    <p>You don't have any cleared levels</p>

                    <button onClick={clearSession} className="btn btn-primary btn-block my-3">Clear Session</button>

               </div>

          );
     }
}

export default Cleared;
