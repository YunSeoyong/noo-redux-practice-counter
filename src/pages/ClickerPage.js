import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

const timerList = [5, 10, 30];

const ClickerPage = () => {
    const authenticate = useSelector(state => state.authenticate);
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    
    const [totalTime, setTotalTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    
    const progressPercentage = (elapsedTime / totalTime) * 100;
    
    useEffect(() => {
        let interval;
        if (gameStarted && elapsedTime < totalTime) {
            interval = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [gameStarted, elapsedTime, totalTime]);

    const handleStart = () => {
        dispatch({
            type: "RESETCOUNTER"
        });
        setElapsedTime(0);
        setGameStarted(true);
    };

    const handleClick = () => {
        dispatch({
            type: "INCREAMENT",
            payload: {num: 1}
        });
    };

    const handleReset = () => {
        dispatch({
            type: "RESETCOUNTER"
        });
        setElapsedTime(0);
        setGameStarted(false);
    };

    const handleTimeChange = (time) => {
        setTotalTime(time);
        handleReset();
    };

    return authenticate ? (
        <Clicker>
            <h2>클리커 게임</h2>
            <p>제한시간 내에 버튼을 몇 번 클릭할 수 있나요?</p>
            <Btns>
                {timerList.map((i) => (
                    <Button
                        variant="secondary"
                        key={`${i}sec`}
                        onClick={() => handleTimeChange(i)}
                        disabled={gameStarted}
                    >
                        {i}초
                    </Button>
                ))}
            </Btns>
            <Timer>
                <ProgressBar
                    now={elapsedTime === 0 ? 0 : progressPercentage}
                    label={`${elapsedTime}s / ${totalTime}s`}
                />
                <p>{totalTime - elapsedTime}초 남았습니다.</p>
            </Timer>
            <GameBoard>
                <p className="counter_number"><span>{count}</span>번 클릭!</p>
                {!gameStarted ? (
                    <Button variant="primary" onClick={handleStart}>
                        Start
                    </Button>
                ) : (
                    <Button
                        variant="danger"
                        onClick={handleClick}
                        disabled={elapsedTime >= totalTime}
                    >
                        Click
                    </Button>
                )}
                <Button
                    variant="secondary"
                    onClick={handleReset}
                    disabled={!gameStarted}
                    className="reset_btn"
                >
                    Reset
                </Button>
            </GameBoard>
        </Clicker>
    ) : (
        <Navigate to="/" />
    );
};

export default ClickerPage;

const Clicker = styled.section`
    position: relative;
    padding-top: 10%;

    h2 {
        font-size: var(--font-lg);
        text-align: center;
        font-weight: 700;
        color: var(--color-primary);
        margin-bottom: 14px;
    }
    & > p {
        text-align: center;
        margin-bottom: 40px;
        font-size: var(--font-md);
        color: #666;
    }

    @media screen and (min-width: 1080px) {
        padding-top: 5%;
    }
`;

const Btns = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    .btn {
        width: 20%;
        max-width: 250px;
        height: 50px;
        margin: 0 5px;
    }
`;

const Timer = styled.div`
    margin: 0 auto 40px;
    width: 80%;
    max-width: 700px;
    text-align: center;

    .progress {
        margin-bottom: 15px;
    }
`;
const GameBoard = styled.div`
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    .counter_number{
        font-size: var(--font-lg);
        font-weight: 600;
        margin-bottom: 40px;
        span {
            font-size: var(--font-title);
            font-weight: 700;
            color: red;
        }
    }

    .btn {
        width: 100%;
        height: 10vw;
        max-height: 70px;
        font-size: var(--font-lg);
        margin-bottom: 10px;

        &.reset_btn {
            height: 8vw;
            max-height: 58px;
            font-size: var(--font-md);
        }
    }
`;