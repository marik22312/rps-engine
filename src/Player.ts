import { IPlayerLocation, PlayerWeapons } from "./config";

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
		
		this.weapon = PlayerWeapons.ROCK;
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