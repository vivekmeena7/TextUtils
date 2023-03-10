import React, { useState } from "react";

export default function About(props) {
    // const [myStyle,setMyStyle]=useState(
    //     {
    //         color:'black',
    //         backgroundColor:'white'
    //     }
    // )
    let myStyle={
      color: props.mode==='dark'?'white':'#12273b',
      backgroundColor:props.mode==='dark'?'#254a6d':'white',
      // border: '2px solid ',
      // borderColor:props.mode==='dark'?'white':'black'
    }
  //   const [btntext,setBtnText]=useState("Enable Dark Mode");

  //  const toggleStyle=()=>{
  //       if (myStyle.color==='black') {
  //           setMyStyle({
  //               color:'white',
  //               backgroundColor:'black',
  //               border:'1px solid white'
  //           })
  //           setBtnText('Enable Light Mode');
  //       }
  //       else{
  //          setMyStyle({
  //           color:'black',
  //           backgroundColor:'white'
  //          })
  //          setBtnText('Enable Dark Mode');

  //       }
  //  }
  return (
    <div className="container" style={{ color: props.mode==='dark'?'white':'#12273b'}}>
        <h1 className="my-2">About us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"style={myStyle}>
              TextUtils give you a way to analyze your text quickly and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"style={myStyle}>
              TextUtils is free encounter tool that provides instant character count and word count statistics for a given text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"style={myStyle}>
              This word counter works on every web browsers like Chrome,Firefox,Safari etc.   
            </div>
          </div>
        </div>
      </div>
      {/* <div className='my-2'>
      <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div> */}
    </div>
  );
}
