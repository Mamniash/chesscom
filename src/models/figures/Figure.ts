import logo from '../../assets/file.png';
import { Cell, Colors } from "../Cell";

export enum FigureNames {
   FIGURE = "FIGURE",
   KING = "KING",
   PAWN = "PAWN",
   ROOK = "ROOK",
   QUEEN = "QUEEN",
   BISHOP = "BISHOP",
   KNIGHT = "KNIGHT"
}

export class Figure {
   color: Colors;
   logo: typeof logo | null;
   cell: Cell;
   name: FigureNames;
   id: number;

   constructor(color: Colors, cell: Cell) {
      this.color = color;
      this.cell = cell;
      this.cell.figure = this;
      this.logo = null;
      this.name = FigureNames.FIGURE;
      this.id = Math.random();
   }

   canMove(target: Cell): boolean {
      if (target.figure?.color === this.color) return false;
      if (target.figure?.name === FigureNames.KING) return false;
      return true;
   }

   // moveFigure(target: Cell) {}
}