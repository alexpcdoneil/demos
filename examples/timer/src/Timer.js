import React, {useState} from 'react';
import './Timer.css';

export const Timer = () => {
    let [minute, setMinute] = useState(0);
    let [second, setSecond] = useState(0);
    let [timerId, setTimerId] = useState(null);

    const startTimer = () => {
        if (timerId) {
            return ;
        }

        setTimerId(setInterval(() => {
            setSecond(++second);

            if (second === 5) {
                setMinute(++minute);
                setSecond(second = 0);
            }
        }, 1000));
    }

    const resetTimer = () =>  {
        clearTimeout(timerId);
        initTimer();
    }

    const initTimer = () => {
        setSecond(0);
        setMinute(0);
        setTimerId(null);
    }


    return (
        <div>
            <div className="timer-block">
                <input type="text" className={'timer-block__value'} value={minute} readOnly/>
                <p>:</p>
                <input type="text" className={'timer-block__value'} value={second} readOnly/>
            </div>
            <div className="timer-button">
                <button className={"timer-button__start-time"} onClick={startTimer}>Старт</button>
                <button className={"timer-button__reset-time"} onClick={resetTimer}>Сброс</button>
            </div>
        </div>
    );
}