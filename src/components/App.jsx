import React, { useState } from "react";
import Header from '../containers/Header/Header';
import Main from '../containers/Main/Main';
import birdsData from '../components/birdsData';
import '../styles/App.css';
import ModalWindow from '../containers/Main/Styled/StyledModalWindow';
import useSound from 'use-sound';
import correct from '../utils/audio/correct.mp3';
import error from '../utils/audio/error.mp3';
import bird from '../utils/img/bird.jpg'

function App() {
  const [currentBirdForDescription, changeCurrentBird] = useState('Послушайте плеер!');
  const [birdDescription, changeCurrentBirdDescription] = useState('Выберите птицу из списка.');
  const [birdLatinaName, changeCurrentBirdLatina] = useState('');
  const [birdImage, changeBirdImage] = useState('');
  const [birdAudio, changeBirdAudio] = useState('');
  const [rightAnswerGiven, changeAnswer] = useState(true);
  const [currentLevel, changeLevel] = useState(0);
  const [scoreForLevel, changeScoreForLevel] = useState(5);
  const [totalScore, changeTotalScore] = useState(0);
  const [birdPicture, changeBirdPicture] = useState(bird);
  const [mistakeClass, changeMistakeClass] = useState('');
  const [rightClass, changeRightClass] = useState('');
  const [clickedAnswer, changeClickedAnswer] = useState('');
  const [allAnswers, changeAllAnswers] = useState([]);

  const shuffledCollection = birdsData[currentLevel];

    const eventHandler = (event) => {
      changeClickedAnswer(event.target.textContent);
      console.log(clickedAnswer);
      if (shuffledCollection[0].id != +event.target.dataset.wordNumber && rightAnswerGiven && !allAnswers.includes(clickedAnswer)) {
      changeMistakeClass('already-clicked');
      changeScoreForLevel(scoreForLevel - 1);
      console.log('cuckold');
      changeAllAnswers([...allAnswers, clickedAnswer]);
      }
      if (!allAnswers.includes(clickedAnswer)) {
        changeAllAnswers([...allAnswers, clickedAnswer]);
        //console.log(allAnswers);
        }
        changeCurrentBird(event.target.textContent);
        changeCurrentBirdDescription(event.target.dataset.wordObject);
        changeCurrentBirdLatina(event.target.dataset.wordLatina);
        changeBirdImage(event.target.dataset.wordImage);
        changeBirdAudio(event.target.dataset.wordAudio);
        if (shuffledCollection[0].id === +event.target.dataset.wordNumber && rightAnswerGiven) {
          changeTotalScore(totalScore + scoreForLevel);
          changeBirdPicture(shuffledCollection[0].image);
          console.log('DA');
          changeRightClass('clicked-right');
          changeAnswer(false); 
        }
      }
    
        const numChange = (event) => {
            changeLevel(currentLevel + 1);
            if (event.target.dataset.buttonIndex === 'button') {
            changeAllAnswers([]);
            changeBirdPicture(bird);
            changeRightClass('');
            changeAnswer(true);
            changeCurrentBird('Послушай Плеер')
            changeCurrentBirdDescription('Выберите птицу из списка.')
            changeCurrentBirdLatina('');
            changeBirdImage('');
            changeBirdAudio('');
            changeScoreForLevel(5);
            }
        }

        const reset = () => {
          changeLevel(0);
        }

        return (
            <div>
                {currentLevel <= 5 ? <Header scoreInPoints={totalScore} level={currentLevel}/> : <ModalWindow resetFunc={reset} points={totalScore}/>}
                {currentLevel <= 5 ? <Main numChangeFunc={numChange} func={eventHandler}
        currentBirdName={currentBirdForDescription}
        birdNameTranslate={birdLatinaName} birdDescription={birdDescription} disabledButton={rightAnswerGiven}
        wordCollection={shuffledCollection} topBirdPicture={birdPicture}
        level={currentLevel} currentBirdImage={birdImage} currentBirdAudio={birdAudio}
        mistakeClass={mistakeClass} rightAnswer={shuffledCollection[0].name} rightClass={rightClass} answerName={clickedAnswer} allAnswers={allAnswers}/> : <ModalWindow />}
            </div>
        );
    }

export default App;