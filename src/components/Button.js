import styled from 'styled-components'


export const Button = styled.button`
    border: 1px solid purple;
    border-radius: 50px;
    padding: 15px;
    text-decoration: none;
    color: purple;
    background-color: black;
    transition: 0.3s;
    font-size: 50px;
    cursor: pointer;
    outline: none;

    &:hover {
        color: white;
        background-color: purple;
    }
`;

export default Button
