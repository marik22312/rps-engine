import { getRangemNumber } from "../utils";

test('Create Random Number', () => {
	const maxCount = 10;

	for (let i = 0; i < maxCount; i++) {
		const randNum = getRangemNumber(i, maxCount);

		expect(randNum).toBeGreaterThanOrEqual(i);
		expect(randNum).toBeLessThanOrEqual(maxCount);
	}
})