
// import express from "express";
const express = require('express');
const app = express();

const port = 4000;



app.listen(port, () => {
    console.log('Listening to port ' + port)
})

// console.log('Hello world')