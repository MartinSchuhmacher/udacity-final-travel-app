import {getPicture} from "../src/client/js/getPicture.js";

describe("Testing get picture data functionality", () => {
    test("Test getPicture function", async () => {
        expect(getPicture).toBeDefined;
        expect(typeof getPicture).toBe("function");
    })
});