import {getLocation} from "../src/client/js/getLocation.js";

describe("Testing get location data functionality", () => {
    test("Test getLocation function", async () => {
        expect(getLocation).toBeDefined;
        expect(typeof getLocation).toBe("function");
    })
});