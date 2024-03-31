import React from 'react'
import { useSelector } from 'react-redux'
import Choice from '../components/Choice';
import LogIn from '../components/LogIn';

const Main = () => {
    const authenticate = useSelector(state => state.authenticate);

  return authenticate ? <Choice /> : <LogIn />
}

export default Main