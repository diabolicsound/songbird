import styled from 'styled-components';
import React from 'react';

const StyledNextLevelButton = styled.button`
color: pink;
width: 80vw;
height: 30px;
margin-left: 10vw;
background-color: #9b00e3;
border-radius: 7px;
margin-top: 15px;
}
`;

const NextLevelButton = (props) => {
    const {func, isDisabled} = props;
    return (
        <StyledNextLevelButton onClick={func} disabled={isDisabled} data-button-index={'button'}>Next Level</StyledNextLevelButton>
    )
}

export default NextLevelButton ;