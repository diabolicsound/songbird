import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';
import React from 'react';
import shuffleArray from '../../../utils/shuffleArray';

const StyledMainTopBlock = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const BirdImage = styled.img`
width: 400px;
height: 300px;
`;

const MainBlockTop = (props) => {
const { sound, image } = props;

    return (
        <StyledMainTopBlock>
<BirdImage src={image} />
<ReactAudioPlayer 
                src={sound}
                autoPlay
                controls
                />
        </StyledMainTopBlock>
    )
}

export default MainBlockTop;