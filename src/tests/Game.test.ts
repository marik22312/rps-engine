import { Game } from '../Game';
import { getLocation } from '../utils';

test('Building Game', () => {
	expect(getLocation(0, 0)).toBe('A0');
	expect(getLocation(0, 1)).toBe('A1');
	expect(getLocation(10, 1)).toBe('J1');
});

test('Building Board', () => {
	const cols = 6;
	const rows = 7;
	const playerRows = 2;
	const game = new Game(cols, rows, playerRows);

	const playersMap = game.players;

	for (let col = 0; col < cols; col++) {
		for (let row = 0; row < playerRows; row++) {
			expect(playersMap).toHaveProperty(getLocation(col, row));
			expect(playersMap).toHaveProperty(getLocation(col, rows - row));
		}
	}
});
