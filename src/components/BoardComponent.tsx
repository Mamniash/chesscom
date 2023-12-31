import React, { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";

interface BoardProps {
   board: Board;
   setBoard: (board: Board) => void;
   currentPlayer: Player | null;
   swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
   const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

   function click(cell: Cell) {
      // console.log(selectedCell);
      if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
         selectedCell.moveFigure(cell);
         setSelectedCell(null);
         swapPlayer();
         //updateBoard();
      } else {
         if (cell.figure?.color === currentPlayer?.color) {
            setSelectedCell(cell);
         }
      }
   }

   useEffect(() => {
      highlightCells();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectedCell])

   function highlightCells() {
      board.highlightCells(selectedCell);
      updateBoard();
   }

   function updateBoard() {
      const newBoard = board.getCopyBoard();
      setBoard(newBoard);
   }

   return (
      <div className="main">
         <h3>Current player <span className={currentPlayer?.color}>{currentPlayer?.color}</span></h3>
         <div className="board">
            {board.cells.map((row, index) =>
               <React.Fragment key={index}>
                  {row.map(cell =>
                     <CellComponent
                        click={click}
                        cell={cell}
                        key={cell.id}
                        selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                     />
                  )}
               </React.Fragment>
            )}
         </div>
      </div>
   );
};

export default BoardComponent;