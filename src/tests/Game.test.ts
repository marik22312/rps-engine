import { Game } from '../Game';

test('Building Game', () => {
	expect(Game.getLocation(0, 0)).toBe('A0');
	expect(Game.getLocation(0, 1)).toBe('A1');
	expect(Game.getLocation(10, 1)).toBe('J1');
});

test('Building Board', () => {

	const cols = 6;
	const rows = 7;
	const playerRows = 2;
	const game = new Game(cols, rows, playerRows);
	
	const playersMap = game.getPlayersMap();

	for (let col = 0; col < cols; col++) {
		for (let row = 0; row < playerRows; row++) {
			expect(playersMap).toHaveProperty(Game.getLocation(col, row, 'test'));
			expect(playersMap).toHaveProperty(Game.getLocation(col, rows - row, 'test'));
		}
	}
})

