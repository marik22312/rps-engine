import { LETTERS } from './config';

export function getRangemNumber(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getLocation(col: number, row: number): string {
	const letters = LETTERS.split('');

	if (col < 0) {
		throw new Error('Column must be a positive number');
	}

	if (row < 0) {
		throw new Error('Row must be a positive number');
	}

	if (col === 10) {
		return letters[col - 1].concat(row.toString());
	}

	const stringCol = col.toString().split('');

	let letterCode = '';

	while (stringCol.length > 0) {
		letterCode = letterCode.concat(letters[parseInt(stringCol[0], 10)]);
		stringCol.shift();
	}

	return letterCode.concat(row.toString());
}
