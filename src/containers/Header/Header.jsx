import React from 'react';
import Title from '../../components/Title/Title'
import Menu from '../../components/Menu/Menu';

const Header = (props) => {
    const { level } = props;
    return (
        <div>
            <Title />
            <Menu level={level}/>
            </div>
    )
}

export default Header;