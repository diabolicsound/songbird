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
font-family: Helvetica, sans-serif;

ul {
  font-size: 25px;
  color:white;
  width: 475px;
  background-color: rgba( 1, 0, 0, 0.5);
  border-radius: 10px;
  padding-left: 0;
}

li:hover {
  cursor: pointer;
}

li {
  list-style-type: none;
  line-height: 43px;
  border: 1px solid black;
}

span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  margin-right: 15px;
  margin-bottom: 5px;
}

.already-clicked {
  background-color: red;
}

.clicked-right {
  background-color: green;
}

.answer-block {
  width: inherit;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

  .answer-block div {
  border-radius: 10px;
  padding-left: 15px;
}

.bird-description {
  width: 500px;
  font-size: 14px;
  line-height: 20px;
}

.flex-block {
  display: flex;
}

.dark-block {
  background-color: rgba( 1,0,0,0.6);
}

img {
  width: 180px;
  height: 190px;
  border-radius: 28%;
  object-fit: cover;
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
          <div className={'dark-block'}>
            <div>
            <img src={currentBirdImage} />
            <div>
            <h2>{currentBirdName}</h2>
          <p>{birdNameTranslate}</p>
          </div>
          </div>
        <p className={'bird-description'}>{birdDescription}</p>
          </div>
        )
      }
    return (
      <div className={'dark-block'}>
        <div className={'flex-block'}>
      <img src={currentBirdImage} />
      <div>
      <h2>{currentBirdName}</h2>
      <p>{birdNameTranslate}</p>
      <ReactAudioPlayer 
                src={currentBirdAudio}
                controls
                />
      </div>
      </div>
    <p className={'bird-description'}>{birdDescription}</p>
      </div>
    )
    }

    const GameList = birdsData[level].map((word, index) => {
      if (allAnswers.includes(word.name)) {
        classForList = mistakeClass;
      }

      else {
        classForList = '';
      }

      if (word.name === rightAnswer) {
        classForList = rightClass;
      }
        return (
            <li onClick={func} key={word.name} data-word-object={word.description} data-word-latina={word.species} 
            data-word-number={word.id} data-word-image={word.image} data-word-audio={word.audio}>
              <span className={classForList}></span>
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