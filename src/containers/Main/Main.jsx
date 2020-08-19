import React, { useState } from 'react';
import ReactDOM from "react-dom"
import MainBlockTop from '../../containers/Main/Styled/StyledMainTopBlock';
import MainBlockBottom  from '../../containers/Main/Styled/StyledMainBottomBlock';
import NextLevelButton from '../../containers/Main/Styled/StyledNextLevelButton';
import birdsData from '../../components/birdsData';
import shuffleArray from '../../utils/shuffleArray';

const Main = () => {
    const shuffledCollection = shuffleArray(birdsData[0])

    
    
    return (
        <div>
        <MainBlockTop sound={shuffledCollection[0].audio}/>
        <MainBlockBottom currentWordCollection={shuffledCollection}/>
        </div>
    )
}

export default Main;