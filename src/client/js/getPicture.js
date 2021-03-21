async function getPicture(url='', cityName) {
    try {
        const response = await fetch(url, {
            mode: 'cors',
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cityNameInput: cityName
            })
        });
        const pictureData = await response.json();
        return pictureData;
    }
    catch(error) {
        console.log('Something went wrong while getPicture: ', error);
    }
}

export {getPicture};