import React, { useState } from "react";
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
/*import './index.css';
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
//Task Login Form*/

//Function Component

/*function Greeting()
{
  const name="azar";
  const age=20;
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>Your age is::{age}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Greeting/>)*/

//using onClick()

/*function SimpleButton()
{
  function showMessage()
  {
    alert("Button was clicked");
  }
  return(
    <div>
      <button onClick={showMessage}>Click</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<SimpleButton/>)*/

//function component with props

/*function Sample(props)
{
  return(
    <div>
      <h1>Hello{props.name}{props.age}</h1>
      <p>This is Paragraph</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample  name="Azar" age="25"/>);*/

//Component in Component

/*function Component1()
{
  return(
    <div>
      <h1>Hello</h1>
      <p>Component1</p>
      <Component2/>
    </div>
  )
}
function Component2()
{,
  return(
    <div>
      <h1>This is Component2</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/

//Class Component

/*class Sample extends React.Component
{
  render()
  {
    return(
      <h1>This is Class Component</h1>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//constructor using props

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={name:props.name,age:props.age};
  }
  render()
  {
    return(
      <div>
        <h1>Hello,{this.state.name}</h1>
        <p>Your age is::{this.state.age}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="azar" age={20}/>)*/

/*class Counter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={count:0};
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }
  render()
  {
    return(
      <div>
        <h1>Counter Aplication</h1>
        <h2>Counter:{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//React Event

/*function Football()
{
  const shoot=()=>{
    alert("Goal!!!")
  }
  return(
    <div>
      <h1>Events</h1>
      <button onClick={shoot}>Shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//Argument Passing in Event Handler

/*function Football()
{
  const shoot=(a)=>{
    alert(a);
  }
  return(
    <div>
      <h1>Football Game</h1>
      <button onClick={()=>shoot("azar")}>Shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//Event Binding in class Component

/*class Football extends React.Component
{
  shoot=a=>{
    alert(a)
  }
  render()
  {
    return(
      <div>
        <h1>Football Game</h1>
        <button onClick={()=>this.shoot("azar!!!")}>Shoot!!!</button>
      </div>
    )
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

/*function MissedGoal()
{
  return<h1>MissedGoal</h1>
}
function MadeGoal()
{
  return<h1>Goal</h1>
  
}
function Football(props)
{
  const isGoal=props.isGoal;
  if(isGoal)
  {
    return<MadeGoal/>
  }
  else
  {
    return<MissedGoal/>
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={Math.random()>0.5}/>)*/

//using class

/*class Football extends React.Component {
  render() {
    const f = this.props.isGoal;
    if (f) {
      return <h1>Goal</h1>
    }
    else {
      return <h1>MissedGoal</h1>
    }
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={Math.random()>0.5}/>)*/

//Event using form

/*function MyForm()
{
  const hs=()=>{
    alert("Form Submitted")
  }
  return(
    <div>
      <form onSubmit={hs}>
        <input type="text" placeholder="Enter the name"/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<MyForm/>)*/

//React List using Map

/*function MyList()
{
  const items=["item1","item2","item3","item4"]
  return(
    <div>
      <h1>MyList</h1>
      <ul>
        {items.map((item,index)=>(
          <li key={index}>{item}{index}</li>
        ))}
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<MyList/>)*/

//Using class Above Program--Task

//React List using Map with props

/*function MyList(props)
{
  const items=props.items;
  return(
    <div>
      <h1>MyList</h1>
      <ul>
        {items.map((item,index)=>(
          <li>{item}<br/>{index}</li>
        ))}
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<MyList items={["item1","item2","item3","item4"]}/>)*/

//destructuring

/*function Welcome({name,age})
{
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>Your age is::{age}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))4
r1.render(<Welcome name="Azar" age={20}/>)*/

//Destructuring in class component with state

/*class Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={name:"azar",age:30}
  }
  render()
  {
    const {name,age}=this.state;
    return(
      <div>
        <h1>Hello,{name}</h1>
        <p>Your age is::{age}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample/>)*/

//Destructuring in Array

/*function Skills()
{
  const skills=["azar","mohamed","raja","prakash"];
  const [a1,a2,a3,a4]=skills;
  return(
    <div>
      <h1>MySkills</h1>
      <ul>
        <li>{a1}</li>
        <li>{a2}</li>
        <li>{a3}</li>
        <li>{a4}</li>
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Skills/>)*/


/*class MyComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log("Constructor called")
  }
  componentDidMount()
  {
    console.log("Component Did Mouned")
  }
  render()
  {
    console.log("Render Methods")
    return(
      <div>
        MyComponent
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyComponent/>)*/

//Unmounting

/*class Child extends React.Component
{
  componentWillUnmount()
  {
    console.log("welcome")
  }
  render()
  {
    return(
      <h1>Child Component</h1>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Child/>)*/

//Updating

/*class Counter extends React.Component
{
  constructor()
  {
    super();
    this.state={count:0}
  }
  componentDidUpdate(preState)
  {
    console.log("ComponentUpdated...")
    console.log("PreviousCount::",preState.count);
    console.log("CurrentCount::",this.state.count);
  }
  render()
  {
    return(
      <>
       <h2>Count::{this.state.count}</h2>
       <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
      </>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//React Hooks useState()

function Counter()
{
  const [count,setCount]=useState(0);
  return(
    <div>
      <h1>Count::{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)