async function getTrip(url='', weatherList) {
    const response = await fetch(url);
    const tripData = await response.json();
    for (const weathOne of tripData.weather) {
        const newElement = 
            `<li class="weather-box">
                ${weathOne.valid_date}
                max ${weathOne.max_temp}°C
                min ${weathOne.min_temp}°C
                <img src="../src/client/media/icons/._${weathOne.weather.icon}.png">
            </li>`;
        weatherList.insertAdjacentHTML('beforeend', newElement);
    }
}

export {getTrip}