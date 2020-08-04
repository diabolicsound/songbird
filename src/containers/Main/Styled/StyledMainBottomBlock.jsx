import styled from 'styled-components';
import React from 'react';

const StyledMainBottomBlock = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const MainBlockBottom = () => {
    return (
        <StyledMainBottomBlock>
            <ul><li>variants</li>
            </ul>
            <p>Anwser</p>
        </StyledMainBottomBlock>
    )
}

export default MainBlockBottom;