import styled from 'styled-components';
import React from 'react';
import birdsking from '../../../utils/img/birdsking.jpg';

const ModalWindowStyled = styled.div`
color: white;
background-color: rgba( 1,0,0,0.8);
font-family: Helvetica, sans-serif;
height: 150px;

h2 {
    width: fit-content;
    margin: 0 auto;
    font-size: 36px;
}

p {
    width: fit-content;
    margin: 0 auto;
    margin-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
}

button {
    color: pink;
width: 100%;
height: 30px;
background-color: #00BD3B;
border-radius: 7px;
    margin-top: 71px;
}

img {
    width: 100%;
    height: 400px;
    margin-top: 10px;
}
`;

const ModalWindow = (props) => {
    const {points, resetFunc} = props;

    if (points === 30) {
        return (
            <ModalWindowStyled>
            <h2>Поздравляем!</h2>
        <p>Вы прошли викторину и набрали максимально возможное количество баллов. Вы - король птиц!</p>
        <img src={birdsking} />
    <button onClick={resetFunc}>Попробовать еще раз</button></ModalWindowStyled>
        )
    }

    else {
    return (
    <ModalWindowStyled>
        <h2>Поздравляем!</h2>
        <p>Вы прошли викторину. Ваш результат - {points} баллов из 30 возможных!</p>
    <button onClick={resetFunc}>Попробовать еще раз</button></ModalWindowStyled>
    )
    }
}

export default ModalWindow;