import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';
import React from 'react';
import shuffleArray from '../../../utils/shuffleArray';

const StyledMainTopBlock = styled.div`
 display: flex;
flex-direction: row;
background-color: rgba( 1, 0, 0, 0.5);
margin-left: 50px;
padding-left: 30px;
border-radius: 10px;

.top-answer-block {
    margin-left: 40px;
}
`;

const BirdImage = styled.img`
width: 250px;
height: 200px;
`;

const BirdName = styled.p`
color: white;
font-size: 22px;
`;

const MainBlockTop = (props) => {
const { sound, image, birdName, rightAnswerGiven } = props;

    return (
        <StyledMainTopBlock>
<BirdImage src={image} />
<div className={'top-answer-block'}>
{(birdName != '' && !rightAnswerGiven) ? <BirdName>{birdName}</BirdName> : <BirdName>******</BirdName>}
          <ReactAudioPlayer 
                src={sound}
               // autoPlay
                controls
                />
                </div>
        </StyledMainTopBlock>
    )
}

export default MainBlockTop;