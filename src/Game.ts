import { GRID_HEIGHT, GRID_WIDTH, LETTERS, PLAYER_ROWS } from "./config";

import { isInterfaceDeclaration } from "@babel/types";
import { Grid } from "./Grid";
import { IGrid } from "./interfaces/Grid";
import { Player } from "./Player";

export class Game {

	public static getLocation(col: number, row: number, type?: string): string {
		const letters = LETTERS.split('');

		if (col < 0) {
			throw new Error('Column must be a positive number')
		}

		if (row < 0) {
			throw new Error('Row must be a positive number')
		}

		if (col === 10) {
			return letters[col -1].concat(row.toString())
		}

		const stringCol = col.toString().split('');

		let letterCode = '';

		while(stringCol.length > 0) {
			letterCode = letterCode.concat(letters[parseInt(stringCol[0], 10)]);
			stringCol.shift();
		}

		return letterCode.concat(row.toString());
	}

	private grid: IGrid;
	private playerRows: number;
	private players: {[x: string]: Player};

	constructor(columns?: number, rows?: number, playerRows?: number) {
		this.grid = {
			columns: columns || GRID_WIDTH,
			rows: rows || GRID_HEIGHT,
		};
		
		this.playerRows = playerRows || PLAYER_ROWS;
		this.players = {};
		this.init();
	}

	public getPlayersMap() {
		return this.players;
	}

	private init(): void {
		for (let col = 0; col < this.grid.columns; col++) {
			for (let row = 0; row < this.playerRows; row ++) {
				const location = Game.getLocation(col, row);
				const location2 = Game.getLocation(col, this.grid.rows - row);
				this.players[location] = new Player(col, row);
				this.players[location2] = new Player(col, this.grid.rows - row);
			}
		}
	}


}