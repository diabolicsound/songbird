import styled from 'styled-components';
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import birdsData from '../../../components/birdsData';
import shuffleArray from '../../../utils/shuffleArray';
import NextLevelButton from '../Styled/StyledNextLevelButton';
import MainBlockTop from '../Styled/StyledMainTopBlock';

const StyledMainBottomBlock = styled.div`
color: white;
width: 100%;
padding-top: 20px;

ul {
  font-size: 32px;
  font-family: Helvetica, sans-serif;
  color:white;
  width: 475px;
  background-color: rgba( 1, 0, 0, 0.5);
  border-radius: 10px;
}

li {
  list-style-type: none;
  margin-bottom: 15px;
}

li:before {
  color: white;
  content: "•";
  padding-right: 10px;
}

.already-clicked {
  color: red;
}

.clicked-right {
  color: green;
}

.answer-block {
  width: inherit;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.answer-block div {
  background-color: rgba( 1,0,0,0.6);
  border-radius: 10px;
}

.bird-description {
  width: 500px;
}

img {
  width: 200px;
}
`;

const StyledUL = styled.ul``;

let classForList;
let rightClassForList;

const GameListContainer = (props) => {
    const { func, numChangeFunc, currentBirdName, birdNameTranslate, birdDescription, disabledButton, 
      level, currentBirdImage, currentBirdAudio, rightClass, rightAnswer, mistakeClass, answerName, allAnswers } = props;      

    const BirdsDescriptionContainer = () => {
      if (!currentBirdAudio) {
        return (
          <div><h2>{currentBirdName}</h2>
          <img src={currentBirdImage} />
          <p>{birdNameTranslate}</p>
        <p className={'bird-description'}>{birdDescription}</p>
          </div>
        )
      }
    return (
      <div><h2>{currentBirdName}</h2>
      <img src={currentBirdImage} />
      <ReactAudioPlayer 
                src={currentBirdAudio}
                controls
                />
      <p>{birdNameTranslate}</p>
    <p className={'bird-description'}>{birdDescription}</p>
      </div>
    )
    }

    const GameList = birdsData[level].map((word, index) => {
      if ((word.name === answerName || allAnswers.includes(word.name)) && disabledButton) {
        classForList = mistakeClass;
      }

      else {
        classForList = '';
      }

      if (word.name === rightAnswer) {
        classForList = rightClass;
      }
        return (
            <li onClick={func} className={classForList} key={word.name} data-word-object={word.description} data-word-latina={word.species} 
            data-word-number={word.id} data-word-image={word.image} data-word-audio={word.audio}>
              {word.name}
            </li>
        );
      });
    
      return <div className={'answer-block'}><StyledUL>{GameList}</StyledUL>
      <BirdsDescriptionContainer />
      </div>;
    }

const MainBlockBottom = (props) => {
  const { func, numChangeFunc, currentBirdName, birdNameTranslate, birdDescription,  
    level, wordsCollection, disabledButton, currentBirdImage,
     currentBirdAudio, mistakeClass,rightClass, answerName, allAnswers, rightAnswer } = props;
    return (
        <StyledMainBottomBlock>
            <GameListContainer func={func} numChangeFunc={numChangeFunc} currentBirdName={currentBirdName}
            birdNameTranslate={birdNameTranslate} birdDescription={birdDescription} disabledButton={disabledButton}
            wordsCollection={wordsCollection} level={level} currentBirdImage={currentBirdImage}
            mistakeClass={mistakeClass} rightClass={rightClass} currentBirdAudio={currentBirdAudio} answerName={answerName}
            allAnswers={allAnswers} rightAnswer={rightAnswer}/>
             <NextLevelButton func={numChangeFunc} isDisabled={disabledButton}/>
        </StyledMainBottomBlock>
    )
}

export default MainBlockBottom;