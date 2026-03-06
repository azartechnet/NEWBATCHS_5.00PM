import React from "react";
import ReactDOM from 'react-dom/client';

//Basic Rendering
/*const App=()=>{
  return(
    <h1>Welcome</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/
//Dynamic Rendering

/*const Sample=()=>{
  const name="azar";
  const age=20;
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>Your age is::{age}</p>
      <p>Today Date is::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Login Form

/*const Login=()=>{
  return(
    <>
      <form>
        <label>UserName</label>
        <input type="text"/>
        <label>Password</label>
        <input type="password"/>
        <input type="submit" value="Login"/>
      </form>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Login/>)*/

//React List

/*const MyElem=()=>{
  return(
    <div>
      <h1>MyList</h1>
      <ul>
        <li>list-1</li>
        <li>list-2</li>
        <li>list-3</li>
        <li>list-4</li>
      </ul>
      
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/


//Conditional Rendering
/*const x=20;
let text="";
if(x>10)
{
  text="x is greater than 10";
}
else
{
  text="x is less than 10";
}
const MyElem=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

/*const x=10;
let text="";
if(x>10)
{
  text="x is greater than 10"
}
else if(x==10)
{
  text="x is less than 10";
}
const MyElem=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<MyElem/>)*/
//Nested if else//else if ladder

//function Component
import './index.css';
function Sample1()
{
  return(
    <div>
      <h1>This is Function Component</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample1/>)
//Task Login Form

