import styled from 'styled-components';
import React, { useState } from 'react';
import birdsData from '../../../components/birdsData';
import shuffleArray from '../../../utils/shuffleArray';

const StyledMainBottomBlock = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const GameListContainer = (props) => {
    const [currentBirdForDescription, changeCurrentBird] = useState('');
    const [birdDescription, changeCurrentBirdDescription] = useState('');
    const [birdLatinaName, changeCurrentBirdLatina] = useState('');
    const { currentLevel, wordCollection } = props;

    const BirdsDescriptionContainer = () => {
    return (
      <div><h2>{currentBirdForDescription}</h2>
      <p>{birdLatinaName}</p>
    <p>{birdDescription}</p>
      </div>
    )
    }

    const eventHandler = (event) => {
      console.log(event.target);
      changeCurrentBird(event.target.textContent)
      changeCurrentBirdDescription(event.target.dataset.wordObject)
      changeCurrentBirdLatina(event.target.dataset.wordLatina)
      if (wordCollection[0].id === +event.target.dataset.wordNumber) {
        console.log('DA')
      }
    }

    const GameList = birdsData[currentLevel].map((word, index) => {
        return (
            <p  key={word.name} data-word-object={word.description} data-word-latina={word.species} data-word-number={word.id} onClick={eventHandler}>
              {word.name}
            </p>
        );
      });
    
      return <div>{GameList}
      <BirdsDescriptionContainer /></div>;
    }

const MainBlockBottom = (props) => {
    const { currentLevel } = props;
    const shuffledCollection = shuffleArray(birdsData[currentLevel])
    return (
        <StyledMainBottomBlock>
            <GameListContainer currentLevel={currentLevel} wordCollection={shuffledCollection}/>
        </StyledMainBottomBlock>
    )
}

export default MainBlockBottom;