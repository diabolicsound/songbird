import styled from 'styled-components';
import React, { useState } from 'react';
import birdsData from '../../../components/birdsData';

const StyledMainBottomBlock = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const GameListContainer = (props) => {
    const { currentLevel } = props;
    const GameList = birdsData[currentLevel].map((word, index) => {
        return (
          <div key={word.name}>
            <p>
              {word.name}
            </p>
          </div>
        );
      });
    
      return <div>{GameList}</div>;
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