import {calculateDateDiff} from "../src/client/js/calculateDateDiff.js";

describe("Testing the date diff functionality", () => {
    test("Test the function to calculate date difference", () => {
        const today = new Date();
        let tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        expect(calculateDateDiff(tomorrow, today)).toEqual(1);
        expect(typeof calculateDateDiff(tomorrow, today)).toBe("number");
    })
});