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
const route = require('./routes/routes');

//Endpoints
app.use('/api_cs', route(express));

module.exports = app;
