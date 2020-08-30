import React from 'react';
import StyledMenu from './Styled/MenuStyled';
import birdsArr from '../../utils/menuList';
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 80%;
margin-left: 9vw;
`; 

const Menu = (props) => {
    const { level } = props;
    const MenuList = birdsArr.map((name, index) => {
        if (index === level) {
        return (
            <li key={name} className={'activeList'}>
              {name}
            </li>
        );
        }
        return (
            <li key={name}>
              {name}
            </li>
        );
      });

    return (
        <StyledDiv>
            <StyledMenu>
               {MenuList}
            </StyledMenu>
            </StyledDiv>
    )
}

export default Menu;