import {checkForValidation} from "../src/client/js/checkInput.js";

describe("Testing the checker for correct input syntax", () => {
    test("Test for truthy and falsy input syntax", () => {
        const inputOne = "Potsdam";
        const inputTwo = "0815 Peter";
        const today = new Date();
        let tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        expect(checkForValidation(inputOne, tomorrow, today)).toBeTruthy();
        expect(checkForValidation(inputTwo, tomorrow, today)).toBeFalsy();
        // alternatively the second check could be '.. .not.toBeTruthy()'
    })
});