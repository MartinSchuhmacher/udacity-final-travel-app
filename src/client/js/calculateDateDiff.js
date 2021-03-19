//calculate days between today and the day of departure
function calculateDateDiff(departureDate, today) {
    return Math.floor((Date.UTC(departureDate.getFullYear(), departureDate.getMonth(), departureDate.getDate()) - Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) ) /(1000*60*60*24));
}

export {calculateDateDiff};