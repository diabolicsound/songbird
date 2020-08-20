import styled from 'styled-components';
import React, { useState } from 'react';
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
      level } = props;

    const BirdsDescriptionContainer = (props) => {
    return (
      <div><h2>{currentBirdName}</h2>
      <p>{birdNameTranslate}</p>
    <p>{birdDescription}</p>
      </div>
    )
    }

    const GameList = birdsData[level].map((word, index) => {
        return (
            <li key={word.name} data-word-object={word.description} data-word-latina={word.species} data-word-number={word.id} >
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
    level, wordsCollection, disabledButton } = props;
    return (
        <StyledMainBottomBlock>
            <GameListContainer func={func} numChangeFunc={numChangeFunc} currentBirdName={currentBirdName}
            birdNameTranslate={birdNameTranslate} birdDescription={birdDescription} disabledButton={disabledButton}
            wordsCollection={wordsCollection} level={level}/>
        </StyledMainBottomBlock>
    )
}

export default MainBlockBottom;