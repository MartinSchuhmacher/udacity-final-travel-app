async function getWeather(url='', latitude, longitude) {
    try {
        await fetch(url, {
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
    }
    catch(error) {
        console.log('Something went wrong while getWeather: ', error);
    }
}

export {getWeather};