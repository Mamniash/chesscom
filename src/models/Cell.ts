import { Board } from "./Board";
import { Figure } from "./figures/Figure";

export enum Colors {
   WHITE = "white",
   BLACK = "black"
}

export class Cell {
   readonly x: number;
   readonly y: number;
   readonly color: Colors;
   figure: Figure | null;
   board: Board
   availabele: boolean;
   id: number;

   constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
      this.x = y;
      this.y = x;
      this.color = color;
      this.figure = figure;
      this.board = board;
      this.availabele = false;
      this.id = Math.random();
   }

   isEmpty(): boolean {
      return this.figure === null;
   }

   isEmptyVertical(target: Cell): boolean {
      if (this.x !== target.x) {
         return false
      }

      const min = Math.min(this.y, target.y);
      const max = Math.max(this.y, target.y);

      for (let y = min + 1; y < max; y++) {
         if (!this.board.getCell(this.x, y).isEmpty()) {
            return false
         }
      }

      return true
   }

   isEmptyHorizontal(target: Cell): boolean {
      return !target
   }

   isEmptyDiagonal(target: Cell): boolean {
      return !target
   }

   moveFigure(target: Cell) {
      if (this.figure && this.figure?.canMove(target)) {
         //this.figure.moveFigure(target);
         target.figure = this.figure;
         this.figure = null;
      }
   }
}