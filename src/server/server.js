const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { allowedNodeEnvironmentFlags } = require('process');

const app = express();
app.use(express.static('dist'));

//configuring express to use body-parser as middleware
//parse URL encoded bodies as sent by HTML forms
app.use(bodyParser.urlencoded({extended:false}));
//parse JSON bodies as sent by API clients
app.use(bodyParser.json());

//use cors for cross origin allowance
app.use(cors());

//app listens on port 8081 for incoming requests in production mode
app.listen(8081, function() {
    console.log('App runs smoothly on port 8081');
});

