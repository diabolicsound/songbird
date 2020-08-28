import styled from 'styled-components';
import React from 'react';

const ModalWindowStyled = styled.div`
color: white;

h2 {
    margin-left: 45%;
    font-size: 36px;
}

p {
    margin-left: 30%;
    font-size: 26px;
}

button {
    margin-left: 10vw;
    width: 70vw;
    height: 20px;
}
`;

const ModalWindow = (props) => {
    const {points, resetFunc} = props;
    return (
    <ModalWindowStyled>
        <h2>Поздравляем!</h2>
        <p>Вы прошли игру. Ваш результат - {points} из 30!</p>
    <button onClick={resetFunc}>Попробовать еще раз</button></ModalWindowStyled>
    )
}

export default ModalWindow;