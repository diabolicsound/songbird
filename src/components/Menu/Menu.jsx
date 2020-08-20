import React from 'react';
import StyledMenu from './Styled/MenuStyled';
import birdsArr from '../../utils/menuList';



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
        <div>
            <StyledMenu>
               {MenuList}
            </StyledMenu>
            </div>
    )
}

export default Menu;