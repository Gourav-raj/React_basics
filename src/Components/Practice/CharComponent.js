import React from 'react'

export default function CharComponent(props) {
    const style={
        border:'1px solid black',
        padding:'16px',
        display:'inline-block',
        margin:'16px',
        textAlign:'center'
    }
    let validationMessage='Too Long ';
    if(props.lenght<=5){
        validationMessage='Too Short';
    }
    return (
        <div style={style}>
            {/* {validationMessage} */}
            <p onClick={props.deletels}>{props.charcter}
</p>
        </div>
        
    )
}
