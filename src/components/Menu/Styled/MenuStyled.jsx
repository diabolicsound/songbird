import styled from 'styled-components';

const StyledMenu = styled.ul`
display: flex;
justify-content: space-around;
flex-direction: row;
background-color: blue;
color: white;

.activeList {
    color: black;
    background-color: pink;
    transition: 1s linear;
}
`;

export default StyledMenu;