const { totalCost } = require("../src/totalCost");

describe("Total Cost", () => {
    it("should be 6 of this basket", () => {
        // Setup
        const basket = [
            {
                name: "Apple",
                price: "2",
                quantity: 1,
            },
            {
                name: "Apple",
                price: "1",
                quantity: 1,
            },
            {
                name: "Apple",
                price: "3",
                quantity: 1,
            },
        ];

        // Execute
        const res = totalCost(basket);

        // Verify
        expect(res).toEqual(6);
    });

    it("should be 18 of this basket", () => {
        // Setup
        const basket = [
            {
                name: "Apple",
                price: "2",
                quantity: 5,
            },
            {
                name: "Apple",
                price: "1",
                quantity: 2,
            },
            {
                name: "Apple",
                price: "3",
                quantity: 2,
            },
        ];

        // Execute
        const res = totalCost(basket);

        // Verify
        expect(res).toEqual(18);
    });

    it("should be 0 of this basket", () => {
        // Setup
        const basket = [];

        // Execute
        const res = totalCost(basket);

        // Verify
        expect(res).toEqual(0);
    });
});
