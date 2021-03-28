//const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

//using environment variable
/*
dotenv.config();
const geonamesApi = {geonames_username: process.env.GEONAMES_USERNAME};
const weatherbitApi = {weatherbit_key: process.env.WEATHERBIT_KEY};
const pixabayApi = {pixabay_key: process.env.PIXABAY_KEY};
*/

//setup empty JS object to act as endpoint
let tripData = {};

const app = express();
app.use(express.static('dist'));

//parse URL encoded bodies as sent by HTML forms
app.use(express.urlencoded({extended:false}));
//parse JSON bodies as sent by API clients
app.use(express.json());

//use cors for cross origin allowance
app.use(cors());

//app listens on port 8081 for incoming requests in production mode
app.listen(8081, function() {
    console.log('App runs smoothly on port 8081');
});

//axios for promised based request
//auto parse JSON by default, no need to do extra for data received from client
app.post('/location', function(request, response) {
    console.log(request.body);
    axios.get('http://api.geonames.org/searchJSON?q='+request.body.destinationInput+'&maxRows=10&lang=en&username=martilunya')
    .then(res => {
        console.log(res.data.geonames[0]);
        tripData = {destination: res.data.geonames[0].toponymName}
        response.send(res.data.geonames[0]);
    })
    .catch(error => {
        console.log('Error while location GET with axios:', error);
    });
});

app.post('/weather', function(request, response) {
    console.log(request.body);
    axios.get('http://api.weatherbit.io/v2.0/forecast/daily?key=dd209d0def734551b36581634fd8af58&lat='+request.body.latitudeInput+'&lon='+request.body.longitudeInput)
    .then(res => {
        console.log(res.data);
        tripData.weather = res.data.data;
        response.send(res.data);
    })
    .catch(error => {
        console.log('Error while weather GET with axios: ', error);
    });
});

app.post('/picture', function(request, response) {
    console.log(request.body);
    axios.get('https://pixabay.com/api/?key=20793540-4a2a3c92a127a46d775b25c1c&q='+request.body.cityNameInput)
    .then(res => {
        console.log(res.data.hits[0]);
        tripData.picture = res.data.hits[0].webformatURL;
        response.send(tripData);
    })
    .catch(error => {
        console.log('Error while picture GET with axios: ', error);
    });
});

//send back recent project data
app.get('/all', function(req,res) {
    res.send(projectData);
})
