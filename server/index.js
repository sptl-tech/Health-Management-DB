const e = require("express");
const express = require("express")
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'healthSystem'
});

app.post('/create', (req, res) => {
    const PatientName = req.body.PatientName
    const PatientBMI = req.body.PatientBMI

    db.query(
        "INSERT INTO PATIENT (PatientName, PatientBMI) VALUES (?,?)",
        [PatientName, PatientBMI],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values Inserted")
            }
        }
    );
})

app.get('/patients', (req, res) => {
    db.query("SELECT * FROM PATIENT", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log("Running on port 3001");
});