const e = require("express");
const express = require("express")
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'healthSystem'
});

app.post('/create', (req, res) => {
    const name = req.body.name
    const bmi = req.body.age

    db.query(
        'INSERT INTO PATIENT (PatientName, PatientBMI) VALUES (?,?)',
        (PatientName, PatientBMI),
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values Inserted")
            }
        }
    );
})

app.listen(3001, () => {
    console.log("Running on port 3001");
});