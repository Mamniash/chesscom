import { Cell, Colors } from "../Cell";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-pawn.png";
import whiteLogo from "../../assets/white-pawn.png";

export class Pawn extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
      this.name = FigureNames.PAWN;
   }

   canMove(target: Cell): boolean {
      if (!super.canMove(target)) return false;

      // const x = this.cell.x;
      // const y = this.cell.y;
      // const newX = target.x;
      // const newY = target.y;
      // const color = this.color;

      // if (color === Colors.BLACK && newY === y && newX === x + 1 && !target.figure)
      //    return true;
      // if (color === Colors.WHITE && newY === y && newX === x - 1 && !target.figure)
      //    return true;
      return true;
   }
}