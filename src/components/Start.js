import React from 'react'
import styled, { css } from 'styled-components/macro'
import Button from './Button';

const Intro = styled.div`
  margin-top: 8px;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 5px;
`;


const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <Intro>
            <h1>Take the quiz.</h1>
            <h4>Whenever, you want.</h4>
            <Button onClick={startQuiz} css={btnCSS}>Begin</Button>
        </Intro>
    )
}

export default Start
