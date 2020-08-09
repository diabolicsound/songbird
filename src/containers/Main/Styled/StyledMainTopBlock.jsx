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
`;

const MainBlockTop = (props) => {
const { sound, image } = props;

    return (
        <StyledMainTopBlock>
<BirdImage src={'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg'} />
<ReactAudioPlayer 
                src={sound}
                autoPlay
                controls
                />
        </StyledMainTopBlock>
    )
}

export default MainBlockTop;