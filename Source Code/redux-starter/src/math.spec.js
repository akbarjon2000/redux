import { isEven } from "./math"
describe('isEven', () => {
    it("should return true if the num is even", () => {
        const result = isEven(2);
        expect(result).toEqual(true)
    })

    it("should return false if the num is odd", () => {
        const result = isEven(1);
        expect(result).toEqual(false)
    })
});

