const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

let app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

//Import endpoint's routers

//Endpoints

module.exports = app;
