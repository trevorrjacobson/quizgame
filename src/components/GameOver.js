import styled from 'styled-components'
import {Button} from './Button'

const Title = styled.h1`
    margin-top: 4px;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 4px;
`;

const GameOver = ({pts}) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
            <Title>Game Over</Title>
            <Points>You did {pts} out of 5!</Points>
            <Button onClick={refreshPage}>Retry</Button>
        </>
    )
}

export default GameOver
