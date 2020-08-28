import React, { useState } from "react";
import Header from '../containers/Header/Header';
import Main from '../containers/Main/Main';
import birdsData from '../components/birdsData';
import '../styles/App.css';
import ModalWindow from '../containers/Main/Styled/StyledModalWindow';
import useSound from 'use-sound';
import correct from '../utils/audio/correct.mp3';
import error from '../utils/audio/error.mp3';
import bird from '../utils/img/bird.jpg';

let randomNumber = Math.round((Math.random() * 6)).toFixed(0);

function randomAnswerNumber() {
  randomNumber = Math.round((Math.random() * 6)).toFixed(0);
  return randomNumber;
}

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
  const [clickedAnswer, changeClickedAnswer] = useState('lol');
  const [allAnswers, changeAllAnswers] = useState([]);
  const [randomNum, changeNum] = useState(randomNumber);

  const shuffledCollection = birdsData[currentLevel];

  const [playRight] = useSound(
    correct,
    { volume: 1 }
  );

  const [playWrong] = useSound(
    error,
    { volume: 1 }
  );

    const eventHandler = (event) => {
      if (birdsData[currentLevel][randomNum].id != +event.target.dataset.wordNumber && rightAnswerGiven && !allAnswers.includes(event.target.textContent)) {
      changeMistakeClass('already-clicked');
      changeScoreForLevel(scoreForLevel - 1);
      playWrong();
      changeAllAnswers([...allAnswers, event.target.textContent]);
      }
        changeCurrentBird(event.target.textContent);
        changeCurrentBirdDescription(event.target.dataset.wordObject);
        changeCurrentBirdLatina(event.target.dataset.wordLatina);
        changeBirdImage(event.target.dataset.wordImage);
        changeBirdAudio(event.target.dataset.wordAudio);
        if (birdsData[currentLevel][randomNum].id === +event.target.dataset.wordNumber && rightAnswerGiven) {
          changeTotalScore(totalScore + scoreForLevel);
          playRight();
          changeBirdPicture(birdsData[currentLevel][randomNum].image);
          console.log('DA');
          changeRightClass('clicked-right');
          changeAnswer(false);
          changeClickedAnswer(event.target.textContent) 
        }
      }
    
        const numChange = (event) => {
            changeLevel(currentLevel + 1);
            if (event.target.dataset.buttonIndex === 'button') {
            changeNum(randomAnswerNumber());
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
          changeScoreForLevel(5);
          changeTotalScore(0);
        }

        return (
            <div>
                 <Header scoreInPoints={totalScore} level={currentLevel}/>
                {currentLevel <= 5 ? <Main numChangeFunc={numChange} func={eventHandler}
        currentBirdName={currentBirdForDescription}
        birdNameTranslate={birdLatinaName} birdDescription={birdDescription} disabledButton={rightAnswerGiven}
        wordCollection={birdsData[currentLevel]} topBirdPicture={birdPicture}
        level={currentLevel} currentBirdImage={birdImage} currentBirdAudio={birdAudio}
        mistakeClass={mistakeClass} randomNumber={randomNum} rightAnswer={birdsData[currentLevel][randomNum].name} rightClass={rightClass}
         answerName={clickedAnswer} allAnswers={allAnswers}/> : <ModalWindow resetFunc={reset} points={totalScore}/>}
            </div>
        );
    }

export default App;