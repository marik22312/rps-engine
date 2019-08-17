import { GRID_HEIGHT, GRID_WIDTH, IPlayerLocation, PLAYER_COLORS, PLAYER_DIRECTIONS, PLAYER_ROWS } from './config';

import { IGrid } from './interfaces/Grid';
import { Player } from './Player';
import { getLocation } from './utils';

export class Game {
	get maxRows() {
		return this.grid.rows;
	}

	get maxCols() {
		return this.grid.columns;
	}

	get players() {
		return this.board;
	}

	private grid: IGrid;
	private playerRows: number;
	private board: { [x: string]: Player };

	constructor(columns?: number, rows?: number, playerRows?: number) {
		this.grid = {
			columns: columns || GRID_WIDTH,
			rows: rows || GRID_HEIGHT,
		};

		this.playerRows = playerRows || PLAYER_ROWS;
		this.board = {};

		this.initBoard();
	}

	public makeTurn(player: Player, dir: PLAYER_DIRECTIONS) {
		const currentLocation = player.currentLocation;
		let newLocation = currentLocation;

		let newCol: number = 0;
		let newRow: number = 0;
		let newLocationCode: string = '';

		switch (dir) {
			case PLAYER_DIRECTIONS.UP:
				if (currentLocation.row + 1 > this.grid.rows) {
					throw new Error("You Can't Move There!");
				}
				newRow = currentLocation.row + 1;
				newCol = currentLocation.col;

				newLocationCode = getLocation(newCol, newRow);

				newLocation = {
					col: newCol,
					locationCode: newLocationCode,
					row: newRow,
				};

				break;

			case PLAYER_DIRECTIONS.DOWN:
				if (currentLocation.row - 1 < 0) {
					throw new Error("You Can't Move There!");
				}
				newRow = currentLocation.row - 1;
				newCol = currentLocation.col;

				newLocationCode = getLocation(newCol, newRow);

				newLocation = {
					col: newCol,
					locationCode: newLocationCode,
					row: newRow,
				};
				break;

			case PLAYER_DIRECTIONS.RIGHT:
				if (currentLocation.col + 1 > this.grid.columns) {
					throw new Error("You Can't Move There!");
				}
				newRow = currentLocation.row;
				newCol = currentLocation.col + 1;

				newLocationCode = getLocation(newCol, newRow);

				newLocation = {
					col: newCol,
					locationCode: newLocationCode,
					row: newRow,
				};
				break;

			case PLAYER_DIRECTIONS.LEFT:
				if (currentLocation.col - 1 > 0) {
					throw new Error("You Can't Move There!");
				}
				newRow = currentLocation.row;
				newCol = currentLocation.col - 1;

				newLocationCode = getLocation(newCol, newRow);

				newLocation = {
					col: newCol,
					locationCode: newLocationCode,
					row: newRow,
				};
				break;

			default:
				break;
		}

		if (this.board[newLocationCode]) {
			const opponent = this.board[newLocationCode];

			if (player.battle(opponent)) {
				this.updateLocation(player, newLocation);
			} else {
				this.removePlayer(player);
			}
		}

		return this;
	}

	private initBoard(): void {
		for (let col = 0; col < this.grid.columns; col++) {
			for (let row = 0; row < this.playerRows; row++) {
				const location = getLocation(col, row);
				const location2 = getLocation(col, this.grid.rows - row);
				this.board[location] = new Player(col, row, location, PLAYER_COLORS.RED);
				this.board[location2] = new Player(col, this.grid.rows - row, location, PLAYER_COLORS.BLUE);
			}
		}
	}

	private updateLocation(player: Player, newLocation: IPlayerLocation) {
		const currentLocation = player.currentLocation;

		this.removePlayer(player);

		player.updateLocation(newLocation);
		this.board[newLocation.locationCode] = player;

	}

	private removePlayer(player: Player) {
		delete this.board[player.currentLocation.locationCode];
	}
}
