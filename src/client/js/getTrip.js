function getTrip(resultsArea, dateDiff, totalData) {
    let newDiv = document.createElement('div');
    let newList = document.createElement('ul');
    const pictureElement = `<img class="picture" src="${totalData.picture}">`;
    console.log(totalData);
    const dateDiv = document.createElement('div');
    dateDiv.innerHTML = `Departure to ${totalData.destination} in ${dateDiff} days.`;
    resultsArea.insertAdjacentHTML('beforeend', pictureElement);
    for (const weathOne of totalData.weather) {
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
    newDiv.appendChild(dateDiv);
    resultsArea.appendChild(newDiv);
}

export {getTrip};