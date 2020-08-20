import React, { useState } from 'react';
import ReactDOM from "react-dom"
import MainBlockTop from '../../containers/Main/Styled/StyledMainTopBlock';
import MainBlockBottom  from '../../containers/Main/Styled/StyledMainBottomBlock';
import NextLevelButton from '../../containers/Main/Styled/StyledNextLevelButton';
import birdsData from '../../components/birdsData';
import shuffleArray from '../../utils/shuffleArray';

const Main = () => {
    const [currentBirdForDescription, changeCurrentBird] = useState('Послушайте плеер!');
  const [birdDescription, changeCurrentBirdDescription] = useState('Выберите птицу из списка.');
  const [birdLatinaName, changeCurrentBirdLatina] = useState('');
  const [rightAnswer, changeAnswer] = useState(true);
  const [currentLevel, changeLevel] = useState(0);

  const shuffledCollection = birdsData[currentLevel];

  const eventHandler = (event) => {
    changeCurrentBird(event.target.textContent)
    changeCurrentBirdDescription(event.target.dataset.wordObject)
    changeCurrentBirdLatina(event.target.dataset.wordLatina)
    if (shuffledCollection[0].id === +event.target.dataset.wordNumber) {
      console.log('DA');
      changeAnswer(false); 
    }
  }

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
    return (
        <div>
        <MainBlockTop sound={shuffledCollection[0].audio} />
        <MainBlockBottom numChangeFunc={numChange} func={eventHandler}
        currentBirdName={currentBirdForDescription}
        birdNameTranslate={birdLatinaName} birdDescription={birdDescription} disabledButton={rightAnswer}
        wordCollection={shuffledCollection}
        level={currentLevel}/>
        </div>
    )
}

export default Main;