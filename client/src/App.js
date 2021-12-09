import './App.css';
import React, { useState } from "react";
import axios from 'axios'

 const App = () => {

  const[PatientName, setName] = useState("");
  const[PatientBMI, setBMI] = useState(0);
  const[PatientAge, setAge] = useState(0);


  const [PatientList, setPatientList] = useState([]);

  const addPatient = () => {
    axios.post('http://localhost:3001/create', {
      PatientName: PatientName,
      PatientBMI: PatientBMI,
      PatientAge: PatientAge
    }).then(()=> {
      setPatientList([...PatientList,
        {
        PatientName: PatientName,
        PatientBMI: PatientBMI,
        PatientAge: PatientAge
        }
      ])
      console.log("Success");
    });
  };

  const getPatients = () => {
    axios.get('http://localhost:3001/patients').then((response)=> {
        setPatientList(response.data)
      });
  }

  const getHospitalView = () => {
    axios.get("http://localhost:3001/hosView").then((response) =>{
      console.log(response);
    })
  }

  const getDoctorView = () => {
    axios.get("http://localhost:3001/docView").then((response) =>{
      console.log(response);
    })
  }

  const getPatientView = () => {
    axios.get("http://localhost:3001/patView").then((response) =>{
      console.log(response);
    })
  }


  return (
    <div className="App">
      <h1>Health Management Application</h1>

      <div className = "form"> 
        <label>Patient's Name </label>
        <input 
          type = "text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        {/* <label>Patient ID </label>
        <input type = "text" name = "patientID" /> */}
        <label>Patient's BMI </label>
        <input 
          type = "number" 
          onChange={(event) => {
            setBMI(event.target.value);
        }}
        />
        <label>Patient's Age </label>
        <input 
          type = "number" 
          onChange={(event) => {
            setAge(event.target.value);
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
             <h3>Patient's Age: {val.PatientAge}</h3>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default App;
