import React,{useState} from 'react'

export default function Person(props) {
   const [mystate,changeState]=useState({
       Persons: [{
           name:"Gourav" ,age:19
       }]
   });
   const OnclickFunction =()=>{
       changeState({
           Persons:[{
               name:"Ram" ,age:"32"
           }]
       })
   }
    return (
        <div style={props.style}>
            <p> <h1>{props.name}</h1>
    <h3>{props.age}</h3>
    {/* <h3>{props.children}</h3>  */}
    {/* <h1>{mystate.Persons[0].name}</h1> */}
     {/* <button onClick={OnclickFunction}>hahsah</button></p> */}</p>
    <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
}
