document.getElementById('form').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log("clicked!");
    //check input for correct format
    const origin = document.getElementById('text').value;
    const destination = document.getElementById('text2').value;
    const checkResult = Client.checkForLocation(origin, destination);

    //for debugging
    console.log("Result: "+checkResult);

    //if check confirms valid location send request
    if(checkResult) {
        fetch('/location', {
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
    }
    else {
        alert("<Please enter valid locations!>");
    }
}

export {
    handleSubmit
};