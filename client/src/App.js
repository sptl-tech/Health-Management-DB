import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Health Management Application</h1>

      <div className = "form"> 
        <label>Patient Name </label>
        <input type = "text" name = "patientName" />
        <label>Patient ID </label>
        <input type = "text" name = "patientID" />
        <label>Patient BMI </label>
        <input type = "text" name = "BMI" />

        <button>Submit</button>
      </div>
      
    </div>
  );
}

export default App;
