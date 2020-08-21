import styled from 'styled-components';
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import birdsData from '../../../components/birdsData';
import shuffleArray from '../../../utils/shuffleArray';
import NextLevelButton from '../Styled/StyledNextLevelButton';
import MainBlockTop from '../Styled/StyledMainTopBlock';

const StyledMainBottomBlock = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

li {
  list-style-type: none;
}

li:before {
  color: black;
  content: "•";
  padding-right: 10px;
}
`;

const StyledUL = styled.ul``;


const GameListContainer = (props) => {
    const { func, numChangeFunc, currentBirdName, birdNameTranslate, birdDescription, disabledButton, 
      level, currentBirdImage, currentBirdAudio } = props;

    const BirdsDescriptionContainer = () => {
      if (!currentBirdAudio) {
        return (
          <div><h2>{currentBirdName}</h2>
          <img src={currentBirdImage} />
          <p>{birdNameTranslate}</p>
        <p>{birdDescription}</p>
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
    <p>{birdDescription}</p>
      </div>
    )
    }

    const GameList = birdsData[level].map((word, index) => {
        return (
            <li key={word.name} data-word-object={word.description} data-word-latina={word.species} 
            data-word-number={word.id} data-word-image={word.image} data-word-audio={word.audio}>
              {word.name}
            </li>
        );
      });
    
      return <div><StyledUL onClick={func}>{GameList}</StyledUL>
      <BirdsDescriptionContainer />
      <NextLevelButton func={numChangeFunc} isDisabled={disabledButton}/>
      </div>;
    }

const MainBlockBottom = (props) => {
  const { func, numChangeFunc, currentBirdName, birdNameTranslate, birdDescription,  
    level, wordsCollection, disabledButton, currentBirdImage, currentBirdAudio } = props;
    return (
        <StyledMainBottomBlock>
            <GameListContainer func={func} numChangeFunc={numChangeFunc} currentBirdName={currentBirdName}
            birdNameTranslate={birdNameTranslate} birdDescription={birdDescription} disabledButton={disabledButton}
            wordsCollection={wordsCollection} level={level} currentBirdImage={currentBirdImage} currentBirdAudio={currentBirdAudio}/>
        </StyledMainBottomBlock>
    )
}

export default MainBlockBottom;