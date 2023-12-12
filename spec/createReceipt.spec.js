const { createReceipt } = require("../src/createReceipt");

describe("Create Receipt", () => {
    it("incorrect structure", () => {
        // Setup
        const basket = [
            {
                name: "Apple",
                price: "2",
                quantity: 5,
            },
        ];
        // Execute
        const res = createReceipt(basket);

        // Verify
        expect(res).toEqual("5 Apple | Total Price: 10");
    });

    it("incorrect structure", () => {
        // Setup
        const basket = [
            {
                name: "Apple",
                price: "2",
                quantity: 5,
            },
            {
                name: "Mango",
                price: "5",
                quantity: 1,
            },
            {
                name: "Grape",
                price: "3",
                quantity: 2,
            },
        ];
        // Execute
        const res = createReceipt(basket);

        // Verify
        expect(res).toEqual("5 Apple, 1 Mango, 2 Grape | Total Price: 21");
    });

    it("should print error with message about empty basket", () => {
        // Setup
        const basket = [];
        // Execute
        const res = createReceipt(basket);

        // Verify
        expect(res).toEqual("No items in the basket");
    });
});
