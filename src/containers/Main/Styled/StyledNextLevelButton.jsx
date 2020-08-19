import styled from 'styled-components';
import React from 'react';

const StyledNextLevelButton = styled.button`
color: pink;
width: 200px;
height: 30px;
`;

const NextLevelButton = (props) => {
    const {func, isDisabled} = props;
    return (
        <StyledNextLevelButton onClick={func} disabled={isDisabled} data-button-index={'button'}/>
    )
}

export default NextLevelButton ;