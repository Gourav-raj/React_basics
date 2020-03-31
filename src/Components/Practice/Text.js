import React, { Component } from 'react'
import CharComponent from './CharComponent'

export class Text extends Component {
    state={
        useInput:''
    }
    changeUserInput=(event)=>{
    this.setState({useInput:event.target.value})
    }
    deleteChar=(index)=>{
    const input=this.state.useInput.split('');
    input.splice(index,1);
    const updateText=input.join('');
    this.setState({useInput:updateText})
    }

    render() {
        const char=this.state.useInput.split('').map((ch,index)=>{
            return <CharComponent 
            charcter={ch} key={index}
             delete={()=>this.deleteChar(index)}/>
        })
        return (
            <div className="App">
                <input type="text" onChange={this.changeUserInput} value={this.state.useInput}/>
                <h1>{this.state.useInput}</h1>
                <CharComponent lenght={this.state.useInput.length}/>
                {char}
            </div>
        )
    }
}

export default Text
