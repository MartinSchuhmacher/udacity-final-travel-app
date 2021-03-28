import {getTrip} from "../src/client/js/getTrip.js";

let area = document.createElement('section');
area.setAttribute("id", "results-area");
const dateDiff = 1;
const data = {
    picture: 'https:test.com',
    destination: 'Tokyo',
    weather: [
        {
            valid_date: '12',
            weather: {icon: 'sun'},
            max_temp: '10',
            min_temp: '1'
        }
    ]
};

describe("Testing getdata functionality", () => {
    test("Get Data and populate html page",  () => {
        getTrip(area, dateDiff, data)
        const picture = document.getElementsByClassName('picture');
        const weatherBox = document.getElementsByClassName('weather-box');
        expect(picture).toBeDefined;
        expect(weatherBox).toEqual(expect.anything());
    });
});