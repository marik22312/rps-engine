import { getRangemNumber } from "../utils";

test('Create Random Number', () => {
	expect(getRangemNumber(0, 3)).toBeLessThanOrEqual(3);
	expect(getRangemNumber(0, 3)).toBeGreaterThanOrEqual(0);
})