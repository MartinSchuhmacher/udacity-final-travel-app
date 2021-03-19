//check if origin and destination input match a valid location format
function checkForValidation(origin, destination, departureDate) {
    const expression = /^[-a-zA-Z\s]{0,255}$/;
    const regex = new RegExp(expression);
    //match input data with reg expression
    return ((origin.match(regex) && destination.match(regex) && (departureDate >= new Date())) ? true : false);
}

export {checkForValidation};