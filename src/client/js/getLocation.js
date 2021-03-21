async function getLocation(url='', origin, destination) {
    try {
        const response = await fetch(url, {
            mode: 'cors',
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                originInput: origin,
                destinationInput: destination
            })
        });
        const locationData = await response.json();
        return locationData;
    }
    catch(error) {
        console.log('Something went wrong while getLocation: ', error);
    }
}

export {getLocation};