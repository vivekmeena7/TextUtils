// import { getElementError } from '@testing-library/react';
import React,{useState} from 'react'

export default function Textform(props) {

  
    
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick= ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }
    const handlClearClick= ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText= '';
        setText(newText)
        props.showAlert("Cleared","success");
    }

    const handleCapitalize = () => {
     let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
     setText(newText);
     props.showAlert("Capilized first alphabet","success");
    }
    const handleBold =()=>{
        var newText=document.getElementById('mybox')
        newText.style.fontWeight= 'bold';
        props.showAlert("Your text has been Bold","success");
    }  
    const handlenormal =()=>{
        var newText=document.getElementById('mybox')
        newText.style.fontWeight='normal';
        props.showAlert("Your text has been Normal","success");
    }  

    const handleOnChange = (event)=>{
        // console.log("On change ");
        setText(event.target.value);
    }
    const[text,setText] = useState('')
    // setText('New Text');righht way
    // text=('new text');worng way
    
  return (
    <>
    <div className='container'style = {{color : props.mode==='dark'?'white':'#12273b'}}>
      <h1 >{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text}  onChange={handleOnChange} style = {{backgroundColor : props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#12273b'}} id="mybox"  rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}> Convert to Uppercase</button>
  <button className="btn btn-primary mx-2 my-1 " onClick={handleLoClick}> Convert to Lowercase</button>
  <button  className="btn btn-danger mx-2 my-1 " onClick={handlClearClick}> Clear text</button>
  <button className="btn btn-primary mx-2 my-1 " onClick={handleCapitalize}> Capitalize </button>
  <button className="btn btn-primary mx-2 my-1 " onClick={handleBold}> Bold</button>
  <button className="btn btn-primary mx-2 my-1 " onClick={handlenormal}> Normal</button>
    </div>

    <div className='container my-3' style = {{color : props.mode==='dark'?'white':'#12273b'}}>
        <h2>your text summary</h2>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p> <b>{0.008*text.split(" ").length} Minutes to read</b></p>
       <h3>Preview</h3>
       <p>{text.length>0?text:"Enter Something in the above box to Preview it"}</p>

    </div>
    </>
  )
}
