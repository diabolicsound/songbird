import styled from 'styled-components';
import React from 'react';

const StyledNextLevelButton = styled.button`
color: pink;
width: 100%;
height: 30px;
background-color: #00BD3B;
border-radius: 7px;
margin-top: 15px;

 :enabled {
    background-color: #E25600;
}

:hover {
    background-color: #30E290;
}
}
`;

const NextLevelButton = (props) => {
    const {func, isDisabled} = props;
    return (
        <StyledNextLevelButton onClick={func} disabled={isDisabled} data-button-index={'button'}>Next Level</StyledNextLevelButton>
    )
}

export default NextLevelButton ;