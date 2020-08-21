import React, { useState } from "react";
import Header from '../containers/Header/Header';
import Main from '../containers/Main/Main';
import birdsData from '../components/birdsData';
import '../styles/App.css';

function App() {
  const [currentBirdForDescription, changeCurrentBird] = useState('Послушайте плеер!');
  const [birdDescription, changeCurrentBirdDescription] = useState('Выберите птицу из списка.');
  const [birdLatinaName, changeCurrentBirdLatina] = useState('');
  const [birdImage, changeBirdImage] = useState('');
  const [birdAudio, changeBirdAudio] = useState('');
  const [rightAnswer, changeAnswer] = useState(true);
  const [currentLevel, changeLevel] = useState(0);

  const shuffledCollection = birdsData[currentLevel];

    const eventHandler = (event) => {
        changeCurrentBird(event.target.textContent);
        changeCurrentBirdDescription(event.target.dataset.wordObject);
        changeCurrentBirdLatina(event.target.dataset.wordLatina);
        changeBirdImage(event.target.dataset.wordImage);
        changeBirdAudio(event.target.dataset.wordAudio);
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
            changeBirdImage('');
            changeBirdAudio('');
            }
        }

        return (
            <div>
                <Header level={currentLevel}/>
                <Main numChangeFunc={numChange} func={eventHandler}
        currentBirdName={currentBirdForDescription}
        birdNameTranslate={birdLatinaName} birdDescription={birdDescription} disabledButton={rightAnswer}
        wordCollection={shuffledCollection}
        level={currentLevel} currentBirdImage={birdImage} currentBirdAudio={birdAudio}/>
            </div>
        );
    }

export default App;