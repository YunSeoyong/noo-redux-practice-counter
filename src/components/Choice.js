import React from "react";
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Choice = () => {
    const navigate = useNavigate();
    return (
        <ChoiceSection>
            <Container>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" onClick={() => navigate('/calc')}>➕ 숫자 카운터 ➖</ListGroup.Item>
                    <ListGroup.Item as="li" onClick={() => navigate('/clicker')}>🖱️ 스피드 클리커 게임 🎮</ListGroup.Item>
                </ListGroup>
            </Container>
        </ChoiceSection>
    );
};

export default Choice;

const ChoiceSection = styled.section`
    padding-top: 10%;

    .container {
        ul {
            li {
                padding: 2rem 1rem;
                font-size: var(--font-md);
                font-weight: 600;
                border-color: var(--color-hover);
                color: var(--color-primary);
                cursor: pointer;
                transition: 0.2s;

                &:hover {
                    background-color: var(--color-primary);
                    border-color: var(--color-primary);
                    color: #fff;
                }
            }
        }
    }

    @media screen and (min-width: 1080px) {
        padding-top: 5%;
    }
`;
