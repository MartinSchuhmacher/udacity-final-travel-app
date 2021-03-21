const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { allowedNodeEnvironmentFlags } = require('process');

//using environment variable
dotenv.config();
const geonamesApi = {geonames_username: process.env.GEONAMES_USERNAME};
const weatherbitApi = {weatherbit_key: process.env.WEATHERBIT_KEY};

//setup empty JS object to act as endpoint
let projectData = {};

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

//home route to use build index file from dist folder
//TODO: check if line 17 is enough
app.get('/', function(req, res) {
    res.sendFile('dist.index.html');
});

//send back recent project data
app.get('/all', function(req,res) {
    res.send(projectData);
})

//axios for promised based request
//auto parse JSON by default, no need to do extra for data received from client
app.post('/location', function(request, response) {
    console.log(request.body);
    projectData = {
        origin: request.body.originInput,
        destination: request.body.destinationInput
    };
    axios.get('http://api.geonames.org/searchJSON?q='+projectData.destination+'&maxRows=10&lang=en&username='+geonamesApi.geonames_username)
    .then(res => {
        console.log(res.data.geonames[0]);
        response.send(res.data.geonames[0]);
    })
    .catch(error => {
        console.log('Error while location GET with axios:', error);
    });
});

app.post('/weather', function(request, response) {
    console.log(request.body);
    projectData = {
        latitude: request.body.latitudeInput,
        longitude: request.body.longitudeInput
    };
    axios.get('http://api.weatherbit.io/v2.0/forecast/daily?key='+weatherbitApi.weatherbit_key+'&lat='+projectData.latitude+'&lon='+projectData.longitude)
    .then(res => {
        console.log(res.data);
    })
    .catch(error => {
        console.log('Error while weather GET with axios: ', error);
    })
})