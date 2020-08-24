
import express from "express";
// const express = require('express');
// const models = require('./models/index.js');
import models from "./models/index.js";
const { query } = require('express');
const app = express();

const port = 4000;
// pass all body dada by json
app.use(express.json())

const log = (msg) => console.log(msg);

app.get('/', (req, res) => {
    // const params = JSON.stringify(req.query.id)
    // res.send('Hello world!. Hello Viewers', req.query.id)
    res.send('Hello world!. Hello Viewers!!')
})
app.get('/hello', (req, res) => {
    console.log(req.url);
    res.send('Hello Bipon')
})

app.post('/', (req, res) => {
    const body = req.body;
    res.send('Hello man! this is post ' + body.message);
    // res.send('Hello you! This is post')
})

app.listen(port, () => {
    console.log('Listening to port ' + port)
})

log(models)



/**
 * 1. up and running the express server
 * 2. configure the express server
 * 3. handle the routes of the server
 * https://www.codementor.io/@iykyvic/writing-your-nodejs-apps-using-es6-6dh0edw2o
 */