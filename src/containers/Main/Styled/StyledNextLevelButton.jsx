import styled from 'styled-components';
import React from 'react';

const StyledNextLevelButton = styled.button`
color: pink;
width: 200px;
height: 30px;
`;

const NextLevelButton = (props) => {
    const {func} = props;
    return (
        <StyledNextLevelButton onClick={func}/>
    )
}

export default NextLevelButton ;