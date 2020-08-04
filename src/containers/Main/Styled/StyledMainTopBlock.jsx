import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';
import React from 'react';

const StyledMainTopBlock = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const BirdImage = styled.img`
`;

const MainBlockTop = () => {
    return (
        <StyledMainTopBlock>
<BirdImage src='https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg' />
<ReactAudioPlayer 
                src='https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
                autoPlay
                controls
                />
        </StyledMainTopBlock>
    )
}

export default MainBlockTop;