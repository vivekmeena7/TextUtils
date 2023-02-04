import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const [mode,setMode] = useState('light');
  const toggleMode=()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#12273b';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtiles - Dark Mode';
      setInterval(() => {
        document.title = 'TextUtils is Amazing';
      }, 1500);
      setInterval(() => {
        document.title = ' Install TextUtils Now';
      }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtiles - Light Mode';

    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils"About="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
      
      
      
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}>
            </Route> */}
            {/* <Route exact path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}> */}
            <Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
            {/* </Route> */}
          {/* </Routes> */}
        
        </div>
        {/* </Router> */}
     
     
      
      
    </>
  );
}

export default App;
