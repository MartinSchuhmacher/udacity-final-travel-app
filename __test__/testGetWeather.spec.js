import {getWeather} from "../src/client/js/getWeather.js";

describe("Testing getWeather functionality", () => {
    test("Test getWeather function", async () => {
        expect(getWeather).toBeDefined;
        expect(typeof getWeather).toBe("function");
    })
});