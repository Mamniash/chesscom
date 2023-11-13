import logo from '../../assets/black-king.png'
import { Cell, Colors } from "../Cell";

export enum FigureNames {
   FIGURE = "FIGURE",
   KING = "KING",
   KNIGHT = "KNIGHT",
   PAWN = "PAWN",
   QUEEN = "QUEEN",
   ROOK = "ROOK",
   BISHOP = "BISHOP",
}

export class Figure {
   //static count: number = 0;
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
      this.name = FigureNames.FIGURE
      this.id = Math.random()
   }

   canMove(target: Cell): boolean {
      //console.log(++Figure.count);
      if (target.figure?.color === this.color)
         return false
      //? if (target.figure?.name === FigureNames.KING)
      //?    return false
      return true;
   }

   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   moveFigure(_target: Cell) { }
}