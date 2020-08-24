
// import express from "express";
const express = require('express');
const { query } = require('express');
const app = express();

const port = 4000;

app.get('/', (req, res) => {
    // const params = JSON.stringify(req.query.id)
    res.send('Hello world!. Hello Viewers', req.query.id)
})
app.get('/hello', (req, res) => {
    console.log(req.url);
    res.send('Hello Bipon')
})

app.listen(port, () => {
    console.log('Listening to port ' + port)
})

// console.log('Hello world')