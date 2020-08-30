import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const StyledMainTopBlock = styled.div`
display: flex;
flex-direction: row;
background-color: rgba( 1, 0, 0, 0.5);
padding-left: 30px;
border-radius: 10px;

.rhap_progress-filled {
    color: #00BD3B !important;
    background: #00BD3B !important;
    background-color: #00BD3B !important;
}

.rhap_main-controls-button {
    color: #00BD3B !important;
}

.rhap_volume-button {
    color: #00BD3B !important;
}

.rhap_time {
    color: white;
  }

.rhap_container {
    background-color: rgba( 1,0,0,0) !important;
    box-shadow: rgba( 1,0,0,0) !important;
}

.rhap_progress-indicator, .rhap_volume-indicator  {
    background: white !important;
}

.top-answer-block {
    margin-left: 40px;
    width: 70%;
}

@media (max-width: 768px) {
    padding-left: 0;
    flex-direction: column;

    .top-answer-block {
        margin-left: 30px;
        margin-right: 30px;
        width: auto;
}
`;

const BirdImage = styled.img`
width: 200px;
height: 200px;
border-radius: 20px;
object-fit: cover;

@media (max-width: 768px) {
padding-top:10px;
width: 160px;
height: 160px;
margin: 0 auto;
}
`;

const BirdName = styled.p`
color: white;
font-size: 22px;

@media (max-width: 768px) {
    margin: 0 auto;
    width: fit-content;
    margin-top: 10px;
    margin-bottom: 10px;
    }
`;

const Player = (props) => {
    const {sound} = props;
    return (
    <AudioPlayer
      showJumpControls={false}
      customAdditionalControls={[]}
      src={sound}
    />
    )
};

const MainBlockTop = (props) => {
const { sound, image, birdName, rightAnswerGiven } = props;
    return (
        <StyledMainTopBlock>
<BirdImage src={image} />
<div className={'top-answer-block'}>
{(birdName != '' && !rightAnswerGiven) ? <BirdName>{birdName}</BirdName> : <BirdName>******</BirdName>}
         <Player sound={sound} />
                </div>
        </StyledMainTopBlock>
    )
}

export default MainBlockTop;