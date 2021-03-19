//check if origin and destination input match a valid location format and date is not in the past
function checkForValidation(origin, destination, departureDate, today) {
    const expression = /^[-a-zA-Z\s]{0,255}$/;
    const regex = new RegExp(expression);
    const sameDate = Math.floor((Date.UTC(departureDate.getFullYear(), departureDate.getMonth(), departureDate.getDate()) - Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) ) /(1000*60*60*24));
    return ((origin.match(regex) && destination.match(regex) && (departureDate > today || sameDate === 0)) ? true : false);
}

export {checkForValidation};