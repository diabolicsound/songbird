import styled from 'styled-components';

const StyledMenu = styled.ul`
display: flex;
justify-content: space-around;
flex-direction: row;
background-color: #9b00e3;
color: white;
border-radius: 15px;
font-size: 22px;
padding-top: 5px;
padding-bottom: 5px;
margin-left: 50px;

.activeList {
    background-color: #cb05fc;
    transition: 1s linear;
}
`;

export default StyledMenu;