async function getTrip(url='', weatherList) {
    const response = await fetch(url);
    const tripData = await response.json();
    for (const weathOne of tripData.weather) {
        const newElement = 
            `<li class="weather-box">
                ${weathOne.valid_date}
                max ${weathOne.max_temp}°C
                min ${weathOne.min_temp}°C
                <img src="https://github.com/MartinSchuhmacher/udacity-final-travel-app/blob/main/src/client/media/icons/${weathOne.weather.icon}.png?raw=true">
            </li>`;
        weatherList.insertAdjacentHTML('beforeend', newElement);
    }
}

export {getTrip}