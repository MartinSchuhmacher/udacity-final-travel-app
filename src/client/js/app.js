document.getElementById('form').addEventListener('submit', handleSubmit);
document.getElementById('date').valueAsDate = new Date();

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
        document.getElementById('daysToGo').innerHTML = dateDiff;
        const locationData = Client.getLocation('/location', origin, destination)
        .then(function(locationData) {
            const weatherData = Client.getWeather('/weather', locationData.lat, locationData.lng);
        });
    }
    else {
        alert("<Please enter valid locations and departure date!>");
    }
}

export {
    handleSubmit
};