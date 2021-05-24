import React, { Component } from "react";

export default class Cleared extends Component {

     constructor(props) {
          super(props);
          this.squareRoot = this.squareRoot.bind(this);
          this.cubicRoot = this.cubicRoot.bind(this);
          this.parameterizedRoot = this.parameterizedRoot.bind(this);
     }


     squareRoot() {
          document.getElementById("result").innerText = "Result: " + (Math.sqrt(document.getElementById('number').value));
     }

     cubicRoot() {
          document.getElementById("result").innerText = "Result: " + (Math.cbrt(document.getElementById('number').value));
     }

     parameterizedRoot() {
          var n = document.getElementById("nroot").value;
          var x = document.getElementById("result").value;

          var ng = n % 2;
          if((ng == 1) || x<0)
               x = -x;
          var r = Math.pow(x, 1 / n);
          n = Math.pow(r, n);
  
          if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
              document.getElementById("result").innerText = "Result: " + ng ? -r : r; 
     }

     render() {
         return (
          <div>
               <h3>Cleared Levels</h3>
               <div className="form-group my-1">
                    <label>Number to Test</label>
                    <input type="text" name="number" id="number" className="form-control" placeholder="Enter the number to test" />
               </div>        
               <button onClick={this.squareRoot} className="btn btn-primary btn-block my-3">Level 1 - Square Root</button>
               <button onClick={this.cubicRoot} className="btn btn-primary btn-block my-3">Level 2 - Cubic Root</button>

               <div classNamer="form-group my-1">
                    <label>N-Root</label>
                    <input type="text" name="nroot" id="nroot" className="form-control" placeholder="Enter the root you want to test" />
               </div> 
               <button onClick={this.parameterizedRoot} className="btn btn-primary btn-block my-3">Level 3 - Parameterized N-Root </button>
          
               <div className="form-group my-1">
                    <p id="result" name="result"></p>
               </div> 

          
          </div>
             
         );
     }
 }