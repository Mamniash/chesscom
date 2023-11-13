import { FC, useEffect, useRef, useState } from 'react';
import { Player } from "../models/Player";
import { Colors } from '../models/Cell';

interface TimerProps {
   currentPlayer: Player | null;
   restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
   const [blackTime, setBlackTime] = useState(500)
   const [whiteTime, setWhiteTime] = useState(500);
   const timer = useRef<null | ReturnType<typeof setInterval>>(null)

   useEffect(() => {
      startTimer()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [currentPlayer])

   function startTimer() {
      if (timer.current) {
         clearInterval(timer.current)
      }
      const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
      timer.current = setInterval(callback, 1000)
   }

   function decrementBlackTimer() {
      setBlackTime(prev => {
         if (prev - 1 <= 0)
            handleRestart()
         return prev - 1
      })
   }
   function decrementWhiteTimer() {
      setWhiteTime(prev => {
         if (prev - 1 <= 0)
            handleRestart()
         return prev - 1
      })
   }

   const handleRestart = () => {
      setWhiteTime(500)
      setBlackTime(500)
      restart()
   }

   return (
      <div className='timer'>
         <h2>Black - {blackTime}</h2>
         <h2>White - {whiteTime}</h2>
         <div className='restart'>
            <button onClick={handleRestart}>Restart game</button>
         </div>
      </div>
   );
};

export default Timer;