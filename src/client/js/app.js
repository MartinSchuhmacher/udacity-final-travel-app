

//document.getElementById('sendMe').addEventListener('click', handleSubmit);

let handleSubmit = event => {
    event.preventDefault();
    //check input for correct format
    const origin = document.getElementById('text').value;
    const destination = document.getElementById('text2').value;
    const checkOrigin = Client.checkForLocation(origin);
    const checkDestination = Client.checkForLocation(destination);

    //for debugging
    console.log("Origin Result: "+checkOrigin);
    console.log("Destination Result: "+ checkDestination);

    //if check 
}