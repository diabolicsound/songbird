import styled from 'styled-components';
import React from 'react';

const ModalWindowStyled = styled.div`
`;

const ModalWindow = (props) => {
    const {points, resetFunc} = props;
    return (
    <ModalWindowStyled><p>`Ваш результат - {points} of 30!`</p>
    <button onClick={resetFunc}/></ModalWindowStyled>
    )
}

export default ModalWindow;