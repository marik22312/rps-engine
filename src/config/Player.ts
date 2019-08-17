export enum PlayerWeapons {
	ROCK = 'ROCK',
	PAPER = 'PAPER',
	SCISSORS = 'SCISSORS',
}

export const BattleMap: any = {
	PAPER: {
		ROCK: true,
		SCISSORS: false,
	},
	ROCK: {
		PAPER: false,
		SCISSORS: true,
	},
	SCISSORS: {
		PAPER: true,
		ROCK: false,
	},
};

export enum PLAYER_COLORS {
	BLUE = 'BLUE',
	RED = 'RED',
}

export enum PLAYER_DIRECTIONS {
	UP = 'UP',
	DOWN = 'DOWN',
	LEFT = 'LEFT',
	RIGHT = 'UP',
}
export const AVAILABLE_WEAPONS = Object.values(PlayerWeapons);

export interface IPlayerLocation {
	row: number;
	col: number;
	locationCode: string;
}

export interface IPlayer {
	id: any;
}
