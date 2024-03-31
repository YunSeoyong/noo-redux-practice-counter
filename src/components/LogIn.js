import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const LogIn = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const authenticate = useSelector(state => state.authenticate);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "SIGNIN",
            payload: {
                id: id,
                pw: password,
            }
        });
    };

  return (
    <Login>
        <Container>
            <h2>로그인 후 컨텐츠를 즐겨보세요!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>ID</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="아이디를 입력해주세요."
                        autoComplete="username"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"     
                        placeholder="비밀번호를 입력해주세요." 
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    </Login>
  )
}

export default LogIn;

const Login = styled.section`
    padding-top: 10%;
    .container {
        max-width: 700px;

        h2 {
            font-size: var(--font-lg);
            font-weight: 600;
            margin-bottom: 5vw;
            text-align: center;
            color: var(--color-primary);
        }

        label {
            margin-bottom: 20px;
            font-size: var(--font-md);
            font-weight: 600;
            color: var(--color-primary);
        }

        .btn {
            background-color: var(--color-primary);
            border-color: var(--color-primary);
            color: #fff;
            font-weight: 600;
            transition: 0.2s;

            &:hover {
                background-color: var(--color-hover);
                border-color: var(--color-hover);
                color: #fff;
            }
        }
    }
    @media screen and (min-width: 1080px) {
        padding-top: 5%;
    }
`;