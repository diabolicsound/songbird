import React from 'react';
import StyledTitle from './Styled/TitleStyled';

const Title = (props) => {
    const {scoreInPoints} = props;
    return (
        <StyledTitle>
            <h1>Songbird</h1>
    <p>Score: {`${scoreInPoints}`}</p>
            </StyledTitle>
    )
}

export default Title;