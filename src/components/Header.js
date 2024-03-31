import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const authenticate = useSelector(state => state.authenticate);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch ({
            type: "SIGNOUT"
        });
        navigate('/');
    };

    const handlePrevPage = () => {
        dispatch ({
            type: "RESETCOUNTER"
        });
        navigate(-1)
    };

    const handleTitle = () => {
        dispatch ({
            type: "RESETCOUNTER"
        });
        navigate('/')
    };

    return (
        <HeaderNav>
            <Container fluid="xxl">
                <Row>
                    <Col 
                        className="icon"
                        onClick={handlePrevPage}
                    >
                        <FontAwesomeIcon 
                            icon={faChevronLeft} size="2x"
                            className="faicon"
                        />
                    </Col>
                    <Col className="logo" onClick={handleTitle}><h1>REDUX</h1></Col>
                    {
                        authenticate ? 
                            <Col className="sign" onClick={handleSignOut}>SignOut</Col> :
                            <Col className="sign" onClick={() => {navigate('/')}}>SignIn</Col>
                    }
                </Row>
            </Container>
        </HeaderNav>
    );
};

export default Header;

const HeaderNav = styled.header`
    background-color: var(--color-primary);
    .container-xxl {
        .row {
            height: 80px;
            align-items: center;

            .icon {
                cursor: pointer;

                .faicon {
                    color: #fff;
                    transition: 0.2s;
                }
                &:hover .faicon {
                    color: var(--color-hover);
                }
            }

            .logo {
                text-align: center;
                font-size: var(--font-title);
                font-weight: 700;
                color: #fff;
                cursor: pointer;
            }

            .sign {
                text-align: right;
                font-size: var(--font-md);
                font-weight: 600;
                color: #fff;
                cursor: pointer;
                transition: 0.2s;

                &:hover {
                    color: var(--color-hover);
                }
            }
        }
    }
`;
