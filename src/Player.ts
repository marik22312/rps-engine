import { AVAILABLE_WEAPONS, IPlayerLocation, PlayerWeapons } from "./config";
import { getRangemNumber } from "./utils";

export class Player {
	private weapon: PlayerWeapons;
	private location: IPlayerLocation;
	private isWeaponHidden: boolean;

	constructor(col: number, row: number) {
		this.location = {
			col,
			row,
		};
		this.isWeaponHidden = true;
		
		this.weapon = AVAILABLE_WEAPONS[getRangemNumber(0, AVAILABLE_WEAPONS.length -1)];
	}

	public moveUp(){
		this.location.row++;
	}
	public moveDown(){
		this.location.row--;
	}
	public moveRight(){
		this.location.col++;
	}
	public moveLeft(){
		this.location.col--;
	}

}