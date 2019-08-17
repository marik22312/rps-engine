import { Grid } from '../Grid'

test('Setting Up Grid', () => {
	const HEIGHT = 7;
	const WIDTH = 6;
	const grid = new Grid(HEIGHT, WIDTH);
	expect(grid.height).toBe(HEIGHT)
})