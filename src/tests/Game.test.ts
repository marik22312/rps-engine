import Game from '../Game';
import Player from '../Player';
import { getLocation } from '../utils';
jest.mock('../Player');
const cols = 6;
const rows = 7;
const playerRows = 2;

test('Building Board', () => {
	const game = new Game(cols, rows, playerRows);

	const playersMap = game.players;

	for (let col = 0; col < cols; col++) {
		for (let row = 0; row < playerRows; row++) {
			expect(playersMap).toHaveProperty(getLocation(col, row));
			expect(playersMap).toHaveProperty(getLocation(col, rows - 1 - row));
		}
	}
});

test('Building Players', () => {
	expect(Player).toBeCalledTimes(cols * playerRows * 2);
});
