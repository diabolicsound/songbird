import React, { useState } from 'react';
import ReactDOM from "react-dom"
import MainBlockTop from '../../containers/Main/Styled/StyledMainTopBlock';
import MainBlockBottom  from '../../containers/Main/Styled/StyledMainBottomBlock';
import NextLevelButton from '../../containers/Main/Styled/StyledNextLevelButton';
import birdsData from '../../components/birdsData';
import shuffleArray from '../../utils/shuffleArray';

const Main = (props) => {
  const { func, numChangeFunc, currentBirdName, birdNameTranslate, birdDescription, disabledButton, 
    level, wordCollection, currentBirdImage, 
    currentBirdAudio, mistakeClass, answerName, allAnswers, rightClass, rightAnswer  } = props;
    return (
        <div>
        <MainBlockTop sound={wordCollection[0].audio} image={wordCollection[0].image} />
        <MainBlockBottom numChangeFunc={numChangeFunc} func={func}
        currentBirdName={currentBirdName}
        birdNameTranslate={birdNameTranslate} birdDescription={birdDescription} disabledButton={disabledButton}
        wordCollection={wordCollection} currentBirdImage={currentBirdImage} currentBirdAudio={currentBirdAudio}
        level={level} mistakeClass={mistakeClass} rightClass={rightClass}
        rightAnswer={rightAnswer} answerName={answerName} allAnswers={allAnswers}/>
        </div>
    )
}

export default Main;