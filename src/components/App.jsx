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
import 'babel-polyfill';

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
  const [currentTarget, changeCurrentTarget] = useState('none');
  const [clickedAnswer, changeClickedAnswer] = useState('lol');
  const [allAnswers, changeAllAnswers] = useState([]);
  const [randomNum, changeNum] = useState(randomNumber);
  

    async function imageRequest (target) { 
      const url = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5d1759e7542be65725c0761fcc10f224&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=${target.textContent}`)
      const response = await url.json(); 
      return response.photos.photo[0].url_m;
    }

    async function audioRequest (target, name, latina) { 
      const url = await fetch(`https://www.xeno-canto.org/api/2/recordings?query=${target.dataset.wordLatina}&page=1`, {mode: 'cors'});
      const result = await url.json();
      changeCurrentBird(name);
      changeCurrentBirdLatina(latina);
      console.log('promiseLoaded');
      return result.recordings[0].file;
    }



  const [playRight] = useSound(
    correct,
    { volume: 1 } 
  );

  const [playWrong] = useSound(
    error,
    { volume: 1 }
  );

    const eventHandler = async (event) => {
      event.persist();
      if (birdsData[currentLevel][randomNum].id != +event.target.dataset.wordNumber && rightAnswerGiven && !allAnswers.includes(event.target.textContent)) {
      changeMistakeClass('already-clicked');
      changeScoreForLevel(scoreForLevel - 1);
      playWrong();
      changeAllAnswers([...allAnswers, event.target.textContent]);
      }
      if (birdsData[currentLevel][randomNum].id === +event.target.dataset.wordNumber && rightAnswerGiven) {
        playRight();
        changeTotalScore(totalScore + scoreForLevel);
        changeBirdPicture(await imageRequest(event.target));
        console.log('DA');
        changeRightClass('clicked-right');
        changeAnswer(false);
        changeClickedAnswer(event.target.textContent) 
      }
      console.log(document.getElementById('audioPlayer'))
        await changeBirdAudio(await audioRequest(event.target, event.target.textContent, event.target.dataset.wordLatina));
        changeCurrentBirdDescription(event.target.dataset.wordObject);
        await changeBirdImage(await imageRequest(event.target));
      }
    
        const numChange = (event) => {
            changeLevel(currentLevel + 1);
            if (event.target.dataset.buttonIndex === 'button') {
            changeNum(randomAnswerNumber());
            changeAllAnswers([]);
            changeBirdPicture(bird);
            changeRightClass('');
            changeAnswer(true);
            changeCurrentBird('Послушайте Плеер!')
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