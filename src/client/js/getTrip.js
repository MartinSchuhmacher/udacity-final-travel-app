async function getTrip(url='', resultsArea, dateDiff) {
    const response = await fetch(url);
    const tripData = await response.json();
    let newDiv = document.createElement('div');
    let newList = document.createElement('ul');
    const pictureElement = `<img class="picture" src="${tripData.picture}">`;
    const dateElement = `<div> Departure to ${tripData.destination} in ${dateDiff} days.</div>`;
    resultsArea.insertAdjacentHTML('beforeend', pictureElement);
    for (const weathOne of tripData.weather) {
        const newElement = 
            `<li class="weather-box">
                ${weathOne.valid_date}
                max ${weathOne.max_temp}°C
                min ${weathOne.min_temp}°C
                <img src="https://github.com/MartinSchuhmacher/udacity-final-travel-app/blob/main/src/client/media/icons/${weathOne.weather.icon}.png?raw=true">
            </li>`;
        newList.insertAdjacentHTML('beforeend', newElement);
    }; 
    newDiv.appendChild(newList);
    newDiv.insertAdjacentHTML('beforeend', dateElement);
    resultsArea.insertAdjacentHTML('beforeend', newDiv);
}

export {getTrip}