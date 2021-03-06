document.getElementById('form').addEventListener('submit', handleSubmit);
document.getElementById('date').valueAsDate = new Date();
document.getElementById('delete').addEventListener('click', resetData);
const resultsArea: HTMLElement = document.getElementById('results-area');

function handleSubmit(event: Event): void {
    event.preventDefault();
    //reset results before each request
    while(resultsArea.firstChild) {
        resultsArea.removeChild(resultsArea.firstChild);
    };
    console.log('clicked!');
    //check input for correct format
    const destination: string = document.getElementById('text').value.trim();
    const departureDate: Date = new Date(document.getElementById('date').value);
    const today: Date = new Date();
    const checkResult: boolean = Client.checkForValidation(destination, departureDate, today);
    //for debugging
    console.log('Result: '+checkResult);

    //if check confirms valid location send request
    if(checkResult) {
        const dateDiff = Client.calculateDateDiff(departureDate, today);
        localStorage.setItem('dateDiff', dateDiff.toString());
        const locationData = Client.getLocation('/location', destination)
        .then(function(locationData) {
            Client.getWeather('/weather', locationData.lat, locationData.lng);
            return locationData;
        })
        .then(function(locationData) {
            const totalData = Client.getPicture('/picture', locationData.toponymName);   
            return totalData;
        })
        .then(function(totalData) {
            localStorage.setItem('totalData', JSON.stringify(totalData));
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
    localStorage.clear();
    console.log('reset!');
    while(resultsArea.firstChild) {
        resultsArea.removeChild(resultsArea.firstChild);
    };
}

//restore data from local storage when opening the page
window.onload = function() {
	if (localStorage.getItem('dateDiff') && localStorage.getItem('totalData')) {
		Client.getTrip(resultsArea, JSON.parse(localStorage.getItem('dateDiff')), JSON.parse(localStorage.getItem('totalData')));
	};
};

export {
    handleSubmit,
    resetData
};