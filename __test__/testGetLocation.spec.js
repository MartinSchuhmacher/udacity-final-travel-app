import {getLocation} from "../src/client/js/getLocation.js";

describe("Testing getLocation functionality", () => {
    test("Test getLocationData function", async () => {
        expect(getLocation).toBeDefined;
        expect(typeof getLocation).toBe("function");
    })
});