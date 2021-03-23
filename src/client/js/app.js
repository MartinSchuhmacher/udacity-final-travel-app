document.getElementById('form').addEventListener('submit', handleSubmit);
document.getElementById('date').valueAsDate = new Date();
const resultsArea = document.getElementById('results-area');

function handleSubmit(event) {
    event.preventDefault();
    console.log("clicked!");
    //check input for correct format
    const origin = document.getElementById('text').value.trim();
    const destination = document.getElementById('text2').value.trim();
    const departureDate = new Date(document.getElementById('date').value);
    const today = new Date();
    const checkResult = Client.checkForValidation(origin, destination, departureDate, today);
    //for debugging
    console.log("Result: "+checkResult);

    //if check confirms valid location send request
    if(checkResult) {
        const dateDiff = Client.calculateDateDiff(departureDate, today);
        const locationData = Client.getLocation('/location', origin, destination)
        .then(function(locationData) {
            const weatherData = Client.getWeather('/weather', locationData.lat, locationData.lng);
            return weatherData;
        })
        .then(function(weatherData) {
            Client.getPicture('/picture', weatherData.city_name);
        })
        .then(function() {
            Client.getTrip('/trip', resultsArea, dateDiff);
        });
    }
    else {
        alert("<Please enter valid locations and departure date!>");
    }
}

export {
    handleSubmit
};