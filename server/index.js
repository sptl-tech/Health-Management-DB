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

app.get('/hosView', (req, res) =>{
    db.query("SELECT * FROM DOCTORS", (err, result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
    db.query("SELECT * FROM PATIENTS", (err, result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})

app.get('/docView', (req, res) =>{
    db.query("SELECT * FROM PATIENTS", (err, result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})

app.get('/patView', (req, res) =>{
    db.query("SELECT * FROM PATIENTS ORDER BY RAND() LIMIT 10", (err, result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log("Running on port 3001");
});