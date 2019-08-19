import { getLocation, getRangemNumber } from '../utils';

test('Create Random Number', () => {
	const maxCount = 10;

	for (let i = 0; i < maxCount; i++) {
		const randNum = getRangemNumber(i, maxCount);

		expect(randNum).toBeGreaterThanOrEqual(i);
		expect(randNum).toBeLessThanOrEqual(maxCount);
	}
});

test('Location parser', () => {
	expect(getLocation(0, 0)).toBe('A0');
	expect(getLocation(0, 1)).toBe('A1');
	expect(getLocation(10, 1)).toBe('J1');
});
