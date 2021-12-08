import './App.css';
import React from "react";
import { useState } from "react";
import Axios from 'axios'

function App() {

  const[PatientName, setName] = useState("");
  const[PatientBMI, setBMI] = useState(0);

  const [PatientList, setPatientList] = useState([]);

  const addPatient = () => {
    Axios.post('http://localhost:3001/create', {
      PatientName: PatientName,
      PatientBMI: PatientBMI
    }).then(()=> {
      setPatientList([...PatientList,
        {
        PatientName: PatientName,
        PatientBMI: PatientBMI
        }
      ])
      console.log("Success");
    });
  };

const getPatients = () => {
  Axios.get('http://localhost:3001/patients').then((response)=> {
      setPatientList(response.data)
    });
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

        <button onClick={addPatient}>Submit</button>
      </div>
      <div className="patients">
      <button onClick={getPatients}>Show Patients</button>
      {PatientList.map((val,key) => {
        return (
          <div className="patient">
             <h3>Patient's Name: {val.PatientName}</h3>
             <h3>Patient's BMI: {val.PatientBMI}</h3>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default App;
