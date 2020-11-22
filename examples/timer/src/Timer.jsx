import React, {useState} from 'react';
import './Timer.css';


export const Timer = () => {
    let [timerId, setTimerId] = useState(null);
    let [second, setSecond] = useState(0);

    const startTimer = () => {
        if (timerId) {
            return ;
        }

        setTimerId(setInterval(() => {
            setSecond(prev => prev + 1);
        }, 1000));
    }

    const resetTimer = () =>  {
        clearInterval(timerId);

        initTimer();
    }

    const initTimer = () => {
        setSecond(0);
        setTimerId(null);
    }


    return (
        <div>
            <div className="timer-block">
                <input type="text" className="timer-block__value" value={Math.trunc(second / 5)} readOnly/>
                <p>:</p>
                <input type="text" className="timer-block__value" value={second % 5} readOnly/>
            </div>
            <div className="timer-button">
                <button className="timer-button__start-time" onClick={startTimer}>Старт</button>
                <button className="timer-button__reset-time" onClick={resetTimer}>Сброс</button>
            </div>
        </div>
    );
}