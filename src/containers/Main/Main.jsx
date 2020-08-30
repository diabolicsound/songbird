import React, { useState } from 'react';
import styled from 'styled-components';
import MainBlockTop from '../../containers/Main/Styled/StyledMainTopBlock';
import MainBlockBottom  from '../../containers/Main/Styled/StyledMainBottomBlock';
import NextLevelButton from '../../containers/Main/Styled/StyledNextLevelButton';
import birdsData from '../../components/birdsData';
import shuffleArray from '../../utils/shuffleArray';
import bird from '../../utils/img/bird.jpg';

const StyledDiv = styled.div`
width: 80%;
margin-left: 9vw;
`;

const Main = (props) => {
  const { func, numChangeFunc, currentBirdName, birdNameTranslate, birdDescription, disabledButton, 
    level, wordCollection, currentBirdImage, topBirdPicture, randomNumber,
    currentBirdAudio, mistakeClass, answerName, allAnswers, rightClass, rightAnswer  } = props;
    console.log(wordCollection[randomNumber].name);

    return (
        <StyledDiv>
        <MainBlockTop sound={wordCollection[randomNumber].audio} image={topBirdPicture} birdName={answerName} rightAnswerGiven={disabledButton}/>
        <MainBlockBottom numChangeFunc={numChangeFunc} func={func}
        currentBirdName={currentBirdName}
        birdNameTranslate={birdNameTranslate} birdDescription={birdDescription} disabledButton={disabledButton}
        wordCollection={wordCollection} currentBirdImage={currentBirdImage} currentBirdAudio={currentBirdAudio}
        level={level} mistakeClass={mistakeClass} rightClass={rightClass}
        rightAnswer={rightAnswer} answerName={answerName} allAnswers={allAnswers}/>
        </StyledDiv>
    )
}

export default Main;