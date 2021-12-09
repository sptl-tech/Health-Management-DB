import './App.css';
import React, { useState } from "react";
import axios from 'axios'

 const App = () => {

  const [PatientName, setName] = useState("");
  const [PatientBMI, setBMI] = useState(0);
  const [PatientAge, setAge] = useState(0);
  const [PatientList, setPatientList] = useState([]);
  const [type, setType] = useState("all");

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
      setPatientList(response);
    })
  }

  const getDoctorView = () => {
    axios.get("http://localhost:3001/docView").then((response) =>{
      setPatientList(response);
    })
  }

  const getPatientView = () => {
    axios.get("http://localhost:3001/patView").then((response) =>{
      setPatientList(response);
    })
  }

  const clickEvent = (type) => {
    getPatients();
    setType(type);
  }

  const insuranceProviders = ['Mobamba Care', 'Jahan Gold', 'Divided Health', 'GreenCross'];
  const bloodType = ['O+', 'AB+', 'A-', 'B+', 'O-', 'B-'];

  let view = (val) => {
    switch (type) {
      case 'hospital':
        return(
          <div className="patient">
              <h3>Patient's Name: {val.PatientName}</h3>
              <h3>Patient's Email: {val.PatientName.split(' ').join('.').toLowerCase() + '@gmail.com'}</h3>
              <h3>Patient's Insurance: {insuranceProviders[val.PatientAge % (insuranceProviders.length)]}</h3>
          </div>
        );
      case 'doctor':
        return(
          <div className="patient">
              <h3>Patient's Name: {val.PatientName}</h3>
              <h3>Patient's BMI: {val.PatientBMI}</h3>
              <h3>Patient's Blood Type: {bloodType[val.PatientBMI % (bloodType.length)]}</h3>
          </div>
        );
      default:
        return(
          <div className="patient">
              <h3>Patient's Name: {val.PatientName}</h3>
              <h3>Patient's BMI: {val.PatientBMI}</h3>
              <h3>Patient's Age: {val.PatientAge}</h3>
          </div>
        );
    }
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
      <button onClick={() => clickEvent('all')}>Show Patient View</button>
      <button onClick={() => clickEvent('hospital')}>Show Hospital View</button>
      <button onClick={() => clickEvent('doctor')}>Show Doctor View</button>
      {PatientList.map((val,key) => {
        return (
          view(val)
        );
      })}
    </div>
    </div>
  );
}

export default App;
