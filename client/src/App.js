import './App.css';
import React from "react";
import { useState } from "react";
import Axios from 'axios'

function App() {

  const[name, setName] = useState("");
  const[bmi, setBMI] = useState(0);

  return (
    <div className="App">
      <h1>Health Management Application</h1>

      <div className = "form"> 
        <label>Patient Name </label>
        <input 
          type = "text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        {/* <label>Patient ID </label>
        <input type = "text" name = "patientID" /> */}
        <label>Patient BMI </label>
        <input 
          type = "number" 
          onChange={(event) => {
            setBMI(event.target.value);
        }}
        />

        <button>Submit</button>
      </div>
      
    </div>
  );
}

export default App;
