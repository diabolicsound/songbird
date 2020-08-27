import React from 'react';
import Title from '../../components/Title/Title'
import Menu from '../../components/Menu/Menu';

const Header = (props) => {
    const { level, scoreInPoints } = props;
    return (
        <div>
            <Title scoreInPoints={scoreInPoints}/>
            <Menu level={level}/>
            </div>
    )
}

export default Header;