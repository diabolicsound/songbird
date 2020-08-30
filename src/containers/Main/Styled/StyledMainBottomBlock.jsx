import styled from 'styled-components';
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import birdsData from '../../../components/birdsData';
import shuffleArray from '../../../utils/shuffleArray';
import NextLevelButton from '../Styled/StyledNextLevelButton';
import MainBlockTop from '../Styled/StyledMainTopBlock';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const StyledMainBottomBlock = styled.div`
color: white;
width: 100%;
padding-top: 20px;
font-family: Helvetica, sans-serif;

ul {
  font-size: 18px;
  color:white;
  width: 475px;
  border-radius: 10px;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

li:hover {
  cursor: pointer;
  background-color: #00BD3B;
  transition: 0.5s linear;
}

li {
  background-color: rgba( 1, 0, 0, 0.5);
  list-style-type: none;
  line-height: 52px;
  border-bottom: 1px solid black;
  padding-left: 15px;
  border-radius: 10px;
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

.hidden {
  display: none;
}

.answer-block {
  width: inherit;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

  .answer-block div {
  border-radius: 10px;
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
  padding-left: 22px;
  padding-top: 15px;
}

img {
  width: 180px;
  height: 190px;
  border-radius: 28%;
  object-fit: cover;
  margin-right: 15px;
}

.rhap_progress-filled {
  color: #00BD3B !important;
  background: #00BD3B !important;
  background-color: #00BD3B !important;
}

.rhap_main-controls-button {
  color: #00BD3B !important;
}

.rhap_volume-button {
  color: #00BD3B !important;
}

.rhap_container {
  background-color: rgba( 1,0,0,0) !important;
  box-shadow: rgba( 1,0,0,0) !important;
  width: 270px;
}

.rhap_progress-indicator, .rhap_volume-indicator  {
  background: white !important;
}

.rhap_time {
  color: white;
}

@media (max-width: 1245px) {
  .bird-description {
    width: 350px;
    font-size: 14px;
    line-height: 18px;
  }

  img {
    width: 150px;
    height: 150px;
  }

  .rhap_container {
    width: 200px;
    margin-right: 15px;
  }
}

@media (max-width: 900px) {
  img {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  h2 {
    margin-top: 0;
    margin: 0 auto;
    width: fit-content;
    margin-bottom: 10px;
  }

  h3 {
    margin: 0 auto;
    width: fit-content;
    padding-bottom: 10px;
    font-size: 18px;
  }

  p {
    margin: 0 auto;
    width: fit-content;
    padding-bottom: 10px;
  }

  .rhap_container {
    width: auto;
  }

  .flex-block {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    .answer-block {
      flex-direction: column;
    }

    ul {
      margin-bottom: 30px;
      width: 100%;
    }

    .bird-description {
      width: auto;
      margin: 0;
      padding-bottom: 10px;
    }

    .dark-block {
      padding-right: 10px;
    }

    .answer-block div {
      border-radius: 10px;
      margin-bottom: 5px;
    }
`;

const Player = (props) => {
  const {sound} = props;
  return (
  <AudioPlayer
    showJumpControls={false}
    customAdditionalControls={[]}
    src={sound}
  />
  )
};

const StyledUL = styled.ul``;

let classForList;
let hiddenClassList;

const GameListContainer = (props) => {
    const { func, numChangeFunc, currentBirdName, birdNameTranslate, birdDescription, disabledButton, 
      level, currentBirdImage, currentBirdAudio, rightClass, rightAnswer, mistakeClass, answerName, allAnswers } = props;      

    const BirdsDescriptionContainer = () => {
      if (!currentBirdImage) {
      hiddenClassList = 'hidden';
      }
      if (currentBirdImage) {
        hiddenClassList = '';
        }
      if (!currentBirdAudio) {
        return (
          <div className={'dark-block'}>
            <div>
            <img className={hiddenClassList} src={currentBirdImage} />
            <div>
            <h2>{currentBirdName}</h2>
          <h3>{birdNameTranslate}</h3>
          </div>
          </div>
        <p className={'bird-description'}>{birdDescription}</p>
          </div>
        )
      }
    return (
      <div className={'dark-block'}>
        <div className={'flex-block'}>
      <img className={hiddenClassList} src={currentBirdImage} />
      <div>
      <h2>{currentBirdName}</h2>
      <h3>{birdNameTranslate}</h3>
      <Player sound={currentBirdAudio} />
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