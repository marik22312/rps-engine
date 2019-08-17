export enum PlayerWeapons {
	ROCK = 'ROCK',
	PAPER = 'PAPER',
	SCISSORS = 'SCISSORS',
}

export interface IPlayerLocation {
	row: number;
	col: number;
}

export interface IPlayer {
	id: any;
}
