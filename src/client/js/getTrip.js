function getTrip(resultsArea, dateDiff, totalData) {
    let newDiv = document.createElement('div');
    let newList = document.createElement('ul');
    const pictureElement = `<img class="picture" src="${totalData.picture}">`;
    console.log(totalData);
    const dateDiv = document.createElement('div');
    dateDiv.innerHTML = 
        `<h2>Departure to ${totalData.destination} in ${dateDiff} days!</h2>
         <h3>Here is the 16 days weather forecast:</h3>`;
    resultsArea.insertAdjacentHTML('beforeend', pictureElement);
    for (const weathOne of totalData.weather) {
        const newElement = 
            `<li class="weather-box">
                <div>${weathOne.valid_date}\u00A0</div>
                <img src="https://github.com/MartinSchuhmacher/udacity-final-travel-app/blob/main/src/client/media/icons/${weathOne.weather.icon}.png?raw=true">  
                <div>\u00A0 max ${weathOne.max_temp}°C\u00A0</div>
                <div>\u00A0 min ${weathOne.min_temp}°C</div>
            </li>`;
        newList.insertAdjacentHTML('beforeend', newElement);
    }; 
    newDiv.appendChild(dateDiv);
    newDiv.appendChild(newList);
    resultsArea.appendChild(newDiv);
}

export {getTrip};