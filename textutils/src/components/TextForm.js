import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, {useState}from 'react'


export default function TextForm(props) {
  const handleUpClick =()=>{
   //console.log("uppercase was clicked "+text);
   let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success");
  }
  const handleLoClick =()=>{
    let newText=text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to lowercase","success");
   }
   const handleCapitalizedClick =()=>{
    let newText=text.toCapitalizedCase();
     setText(newText)
     props.showAlert("CapitalizedCase","success");
   }

   const handleClearClick =()=>{
    let newText="";
     setText(newText)
     props.showAlert("Clear","success");
   }

   const handleCopy =()=>{
    console.log("I am copy");
    var text =document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");

 
  }

   
  
  const handleOnChange =(event)=>{ 
  // console.log("On change");
    setText(event.target.value)
   
  }
 

  const [text, setText] = useState('');
  //text ="new text";//Wrong way to change the state
  // setText("new text");//correct way to change the state
  return (
<>
    <div className="container" style ={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>

<div className="mb-3">
  
  <textarea className="form-control"  value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 "onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2 "onClick={handleLoClick}>Convert to Lowercasecase</button>
<button className="btn btn-primary mx-2 "onClick={handleLoClick}>Capitalized Case</button>
<button className="btn btn-primary mx-2 "onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-2 "onClick={handleCopy}>Copy Text </button>


</div>
<div className="container my-3" style ={{color:props.mode==='dark'?'white':'black'}}>
  <h1>Your text summary </h1>
  <p> {text.split(" ").length} words and {text.length}characters</p>
  <p> { 0.008*text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the preview it here"}</p>
</div>
</>
    
  )
}
