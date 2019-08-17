export enum PlayerWeapons {
	ROCK = 'ROCK',
	PAPER = 'PAPER',
	SCISSORS = 'SCISSORS',
}

export const AVAILABLE_WEAPONS = Object.values(PlayerWeapons);

export interface IPlayerLocation {
	row: number;
	col: number;
}

export interface IPlayer {
	id: any;
}
