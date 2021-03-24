document.getElementById('form').addEventListener('submit', handleSubmit);
document.getElementById('date').valueAsDate = new Date();
document.getElementById('delete').addEventListener('click', resetData);
const resultsArea = document.getElementById('results-area');

function handleSubmit(event) {
    event.preventDefault();
    //reset results before each request
    while(resultsArea.firstChild) {
        resultsArea.removeChild(resultsArea.firstChild);
    };
    console.log('clicked!');
    //check input for correct format
    const origin = document.getElementById('text').value.trim();
    const destination = document.getElementById('text2').value.trim();
    const departureDate = new Date(document.getElementById('date').value);
    const today = new Date();
    const checkResult = Client.checkForValidation(origin, destination, departureDate, today);
    //for debugging
    console.log('Result: '+checkResult);

    //if check confirms valid location send request
    if(checkResult) {
        const dateDiff = Client.calculateDateDiff(departureDate, today);
        const locationData = Client.getLocation('/location', origin, destination)
        .then(function(locationData) {
            Client.getWeather('/weather', locationData.lat, locationData.lng);
            return locationData;
        })
        .then(function(locationData) {
            const totalData = Client.getPicture('/picture', locationData.toponymName);
            return totalData;
        })
        .then(function(totalData) {
            Client.getTrip(resultsArea, dateDiff, totalData);
        });
    }
    else {
        alert('<Please enter valid locations and departure date!>');
    }
}

//manually reset result data
function resetData(event) {
    event.preventDefault();
    console.log('reset!');
    while(resultsArea.firstChild) {
        resultsArea.removeChild(resultsArea.firstChild);
    };
}

export {
    handleSubmit,
    resetData
};