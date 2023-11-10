import './scss/App.scss';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';
import { useState, useEffect } from 'react';
import { Colors } from './models/Cell';
import { Player } from "./models/Player";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

const App = () => {
   const [board, setBoard] = useState(new Board());
   const [whitePlayer] = useState(new Player(Colors.WHITE))
   const [blackPlayer] = useState(new Player(Colors.BLACK))
   const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

   useEffect(() => {
      restart();
      setCurrentPlayer(whitePlayer);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   function restart() {
      const newBoard = new Board();
      newBoard.initCells();
      newBoard.addFigures();
      setBoard(newBoard);
   }

   function swapPlayer() {
      setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
   }

   return (
      <div className="app">
         <div className="app">
            <Timer
               restart={restart}
               currentPlayer={currentPlayer}
            />
            <BoardComponent
               board={board}
               setBoard={setBoard}
               currentPlayer={currentPlayer}
               swapPlayer={swapPlayer}
            />
            <div>
               <LostFigures
                  title="Черные фигуры"
                  figures={board.lostBlackFigures}
               />
               <LostFigures
                  title="Белые фигуры"
                  figures={board.lostWhiteFigures}
               />
            </div>
         </div>
      </div>
   );
}

export default App;
