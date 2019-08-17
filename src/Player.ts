import {
	AVAILABLE_WEAPONS,
	BattleMap,
	IPlayerLocation,
	PLAYER_COLORS,
	PLAYER_DIRECTIONS,
	PlayerWeapons,
} from './config';
import { getRangemNumber } from './utils';

export class Player {
	get weapon() {
		return this.playerWeapon;
	}

	get isWeaponVisible() {
		return !this.isWeaponHidden;
	}

	get currentLocation() {
		return this.location;
	}

	public static DIRECTIONS = PLAYER_DIRECTIONS;
	private playerWeapon: string;
	private location: IPlayerLocation;
	private isWeaponHidden: boolean;
	private color: PLAYER_COLORS;

	constructor(col: number, row: number, locationCode: string, color: PLAYER_COLORS.BLUE | PLAYER_COLORS.RED) {
		this.location = {
			col,
			locationCode,
			row,
		};
		this.isWeaponHidden = true;
		this.color = color;

		this.playerWeapon = AVAILABLE_WEAPONS[getRangemNumber(0, AVAILABLE_WEAPONS.length - 1)];
	}

	public moveUp() {
		this.location.row++;
	}
	public moveDown() {
		this.location.row--;
	}
	public moveRight() {
		this.location.col++;
	}
	public moveLeft() {
		this.location.col--;
	}

	public updateLocation(location: IPlayerLocation) {
		this.location = location;

		return this;
	}

	public battle(opponent: Player): boolean {
		const myWeapon = this.weapon;
		const enemyWeapon = opponent.weapon;

		// TODO: Add Trap & Flag logic.
		const map = BattleMap[myWeapon];

		this.showWeapon();
		opponent.showWeapon();

		return map[enemyWeapon];
	}

	private showWeapon() {
		this.isWeaponHidden = true;
	}
}
