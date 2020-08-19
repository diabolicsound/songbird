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
    const { currentLevel } = props;

    const BirdsDescriptionContainer = () => {
    return (
      <div><h2>Bird Name</h2>
      <p>Bird Latina</p>
      <p>Bird Description</p>
      </div>
    )
    }

    const selectedBird = shuffleArray(birdsData[currentLevel]);

    const eventHandler = (event) => {
      console.log(event.target.dataset.wordNumber);
      console.log(selectedBird[0].id);
      if (selectedBird[0].id === +event.target.dataset.wordNumber) {
        console.log('DA')
      }
    }

    const GameList = birdsData[currentLevel].map((word, index) => {
        return (
          <div key={word.name}>
            <p data-word-number={word.id} onClick={eventHandler}>
              {word.name}
            </p>
          </div>
        );
      });
    
      return <div>{GameList}
      <BirdsDescriptionContainer /></div>;
    }

const MainBlockBottom = (props) => {
    const { currentLevel } = props;
    return (
        <StyledMainBottomBlock>
            <GameListContainer currentLevel={currentLevel}/>
        </StyledMainBottomBlock>
    )
}

export default MainBlockBottom;