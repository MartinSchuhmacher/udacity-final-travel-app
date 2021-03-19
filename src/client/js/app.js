document.getElementById('form').addEventListener('submit', handleSubmit);
document.getElementById('date').valueAsDate = new Date();

function handleSubmit(event) {
    event.preventDefault();
    console.log("clicked!");
    //check input for correct format
    const origin = document.getElementById('text').value.trim();
    const destination = document.getElementById('text2').value.trim();
    const departureDate = document.getElementById('date').value;
    const checkResult = Client.checkForValidation(origin, destination, departureDate);

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
        alert("<Please enter valid locations and departure date!>");
    }
}

export {
    handleSubmit
};