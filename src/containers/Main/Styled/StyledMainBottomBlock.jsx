import styled from 'styled-components';
import React, { useState } from 'react';
import birdsData from '../../../components/birdsData';
import shuffleArray from '../../../utils/shuffleArray';
import NextLevelButton from '../Styled/StyledNextLevelButton';

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


const GameListContainer = (props) => {
    const [currentBirdForDescription, changeCurrentBird] = useState('Послушайте плеер!');
    const [birdDescription, changeCurrentBirdDescription] = useState('Выберите птицу из списка.');
    const [birdLatinaName, changeCurrentBirdLatina] = useState('');
    const [rightAnswer, changeAnswer] = useState(true);
    const [currentLevel, changeLevel] = useState(0);

    const {currentWordCollection} = props;


    const numChange = (event) => {
      changeLevel(currentLevel + 1);
      console.log(currentLevel);
      if (event.target.dataset.buttonIndex === 'button') {
        changeAnswer(true);
        changeCurrentBird('Послушай Плеер')
      changeCurrentBirdDescription('Выберите птицу из списка.')
      changeCurrentBirdLatina('');
      }
  }

    const BirdsDescriptionContainer = (props) => {
    return (
      <div><h2>{currentBirdForDescription}</h2>
      <p>{birdLatinaName}</p>
    <p>{birdDescription}</p>
      </div>
    )
    }

    const eventHandler = (event) => {
      changeCurrentBird(event.target.textContent)
      changeCurrentBirdDescription(event.target.dataset.wordObject)
      changeCurrentBirdLatina(event.target.dataset.wordLatina)
      if (currentWordCollection[0].id === +event.target.dataset.wordNumber) {
        console.log('DA');
        changeAnswer(false);
      }
    }

    const GameList = birdsData[currentLevel].map((word, index) => {
        return (
            <li key={word.name} data-word-object={word.description} data-word-latina={word.species} data-word-number={word.id} onClick={eventHandler}>
              {word.name}
            </li>
        );
      });
    
      return <div><ul >{GameList}</ul>
      <BirdsDescriptionContainer />
      <NextLevelButton func={numChange} isDisabled={rightAnswer}/>
      </div>;
    }

const MainBlockBottom = (props) => {
    const { /*currentLevel, */ currentWordCollection } = props;
    return (
        <StyledMainBottomBlock>
            <GameListContainer currentWordCollection={currentWordCollection}/>
        </StyledMainBottomBlock>
    )
}

export default MainBlockBottom;