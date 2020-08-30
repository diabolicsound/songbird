import styled from 'styled-components';

const StyledMenu = styled.ul`
display: flex;
justify-content: space-around;
flex-direction: row;
list-style-type: none;
background-color: #00BD3B;
color: white;
border-radius: 15px;
font-size: 22px;
padding-top: 5px;
padding-bottom: 5px;


li { 
padding-left: 15px;
padding-right: 15px;
}
}

.activeList {
    background-color: #05F750;
    transition: 1s linear;
}

@media (max-width: 950px) {
    font-size: 21px;
}

@media (max-width: 820px) {
    flex-wrap: wrap;
    overlow: hidden;
    padding-left: 0;

    li {
        line-height: 30px;
    }
}
`;

export default StyledMenu;