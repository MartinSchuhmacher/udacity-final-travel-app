async function getWeather(url='', latitude, longitude) {
    try {
        const response = await fetch(url, {
            mode: 'cors',
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                latitudeInput: latitude,
                longitudeInput: longitude
            })
        });
        const weatherData = await response.json();
        return weatherData;
    }
    catch(error) {
        console.log('Something went wrong while getWeather: ', error);
    }
}

export {getWeather}