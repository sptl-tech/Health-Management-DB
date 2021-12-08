import './App.css';
import React from "react";
import { useState } from "react";
import Axios from 'axios'

function App() {

  const[name, setName] = useState("");
  const[bmi, setBMI] = useState(0);

  const [hospitalViewList, setHospitalList] = useState([])
  const [doctorViewList, setDoctorList] = useState([])
  const [patientViewList, setPatientList] = useState([])

  const getHospitalView = () => {
    Axios.get("http://localhost:3001/hosView").then((response) =>{
      console.log(response);
    })
  }

  const getDoctorView = () => {
    Axios.get("http://localhost:3001/docView").then((response) =>{
      console.log(response);
    })
  }

  const getPatientView = () => {
    Axios.get("http://localhost:3001/patView").then((response) =>{
      console.log(response);
    })
  }


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

        <button onClick={getHospitalView}>Hospital View</button>
         {hospitalViewList.map((val, key) => { //add rest of info
           return <div>  
             <h3>val.DoctorName</h3> 
           </div> 
         })}

        <button onClick={getDoctorView}>Doctor View</button>
        <button onClick={getPatientView}>Patient View</button>
    
      
    </div>
  );
}

export default App;
