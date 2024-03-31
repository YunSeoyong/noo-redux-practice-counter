import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const btnList = [1, 5, 10, 50, 100];

const CounterPage = () => {
    const authenticate = useSelector((state) => state.authenticate);
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleIncrease = (number) => {
        dispatch({
            type: "INCREAMENT",
            payload: { num: number },
        });
    };

    const handleDecrease = (number) => {
        dispatch({
            type: "DECREAMENT",
            payload: { num: number },
        });
    };

    const handleReset = () => {
        dispatch({
            type: "RESETCOUNTER"
        })
    }

    return authenticate ? (
        <Counter>
            <h2>숫자 카운터</h2>
            <p>버튼을 눌러 숫자를 카운팅해 보세요.</p>
            <div className="counter_in">
                <p className="num">{count}</p>
                <div className="btn_box">
                    <div className="btns">
                        {btnList.map((i) => (
                            <Button
                                variant="primary"
                                onClick={() => handleIncrease(i)}
                                key={`plus-${i}`}
                            >
                                <FontAwesomeIcon icon={faPlus} /> {i}
                            </Button>
                        ))}
                    </div>
                    <div className="btns">
                        {btnList.map((i) => (
                            <Button
                                variant="danger"
                                onClick={() => handleDecrease(i)}
                                key={`minus-${i}`}
                            >
                                <FontAwesomeIcon icon={faMinus} /> {i}
                            </Button>
                        ))}
                    </div>
                    <div className="btns reset">
                        <Button variant="dark" onClick={handleReset}>RESET</Button>
                    </div>
                </div>
            </div>
        </Counter>
    ) : (
        <Navigate to="/" />
    );
};

export default CounterPage;

const Counter = styled.section`
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
    .counter_in {
        width: 80vw;
        max-width: 700px;
        margin: 0 auto;
        padding: 30px;
        background-color: #fff;
        border-radius: 30px;
        box-shadow: 0 3px 16px rgba(0, 0, 0, 0.2);

        .num {
            font-size: var(--font-title);
            font-weight: 600;
            color: #333;
            text-align: center;
            margin-bottom: 30px;
        }

        .btns {
            margin-bottom: 14px;
            display: flex;
            justify-content: center;

            .btn {
                margin: 0 2px;
                font-size: var(--font-md);
            }

            &.reset {
                margin-top: 40px;
                .btn {
                    width: 100%;
                }
            }
        }
    }

    @media screen and (min-width: 1080px) {
        padding-top: 5%;

        .counter_in {
            .num {
                margin-bottom: 40px;
            }

            .btns {
                margin-bottom: 20px;

                .btn {
                    margin: 0 10px;
                    padding: 10px 20px;
                }
            }
        }
    }
`;
