import React, { useState } from 'react';
import ReactDOM from "react-dom"
import MainBlockTop from '../../containers/Main/Styled/StyledMainTopBlock';
import MainBlockBottom from '../../containers/Main/Styled/StyledMainBottomBlock';
import NextLevelButton from '../../containers/Main/Styled/StyledNextLevelButton';
import birdsData from '../../components/birdsData';
import shuffleArray from '../../utils/shuffleArray';

const Main = () => {
    const [level, changeLevel] = useState(0);

    const numChange = () => {
        changeLevel(level + 1);
        console.log(level);
    }
    
    return (
        <div>
        <MainBlockTop sound={shuffleArray(birdsData[0])[0].audio}/>
        <MainBlockBottom currentLevel={level} />
        <NextLevelButton func={numChange}/>
        </div>
    )
}

export default Main;