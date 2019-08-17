import { GRID_HEIGHT, GRID_WIDTH } from './config';
import { IGrid } from './interfaces/Grid';

export class Grid {
	private gridHeight: number;
	private gridWidth: number;

	constructor(height?: number, width?: number) {
		this.gridHeight = height || GRID_HEIGHT;
		this.gridWidth = width || GRID_WIDTH;
	}

	get height() {
		return this.gridHeight;
	}

	set height(newHeight: number) {
		this.gridHeight = newHeight;
	}
	get width() {
		return this.gridWidth;
	}

	set width(newWidth: number) {
		this.gridWidth = newWidth;
	}
}
