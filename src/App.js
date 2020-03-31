import './App.css';
import Person from './Components/Person';

import React, { Component } from 'react'
import Stud from './Components/Stud';
import Text from './Components/Practice/Text';

export class App extends Component {
  state = {
    Persons :[ 
        {
           id:"ab",name:"gourav", age:"19"
        },
        {
           id:"bc" ,name: "ram",age:100
        },
        {
         id:"cd", name:"max",age:9
        }
      
    ],
    showPersons:false

}
changePerson=(event,id)=>{
const pers=this.state.Persons.findIndex((p1)=>{return p1.id===id;})
                                 
            const person={...this.state.Persons[pers]}
            person.name=event.target.value
            const per=[...this.state.Persons]
            per[pers]=person
            this.setState({Persons:per})
}
togglePersons=()=>{
  const doesshow=this.state.showPersons;
  this.setState({
    showPersons:!doesshow
  })
}
deletePerson=(index)=>{
  const pers=[...this.state.Persons]

  pers.splice(index,1);
  this.setState({Persons:pers})
}
  render() {
    const style={
      backgroundColor:'lightblue',
      font:'inherit',
      border:'4px solid black',
      padding :'12px',
      width:'440px',
      margin:'auto'
    }
    let Per=null;
    if(this.state.showPersons){
      Per=(
      <div>
        {this.state.Persons.map((p1,index)=>{
          return <Person name={p1.name}
          style={style}
          age={p1.age}
          key={p1.id}
           change={(event)=>this.changePerson(event,p1.id) }
           click={()=>this.deletePerson(index)}
           />
        })}
      </div>)
    }

    return (
      <div className="App" >
        {/* <Person name={this.state.Persons[0].name}/> */}
        {Per}
        <button style={style}onClick={this.togglePersons}>Show</button>
        {/* <Stud name={this.state.Persons[0].name}/> */}
       <hr/>
       <Text/>
      </div>
    )
  }
}

export default App
