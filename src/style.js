import styled from "styled-components";

export const Container = styled.nav`
background-color: black;
height: 50px;

`;


export const BoxDropMenu = styled.ul`
list-style: none;
background: blue;
width:90%;
margin: auto;
`;

export const SubBoxDropMenu = styled.li`
line-height:50px;
float: left
`;


export const ActionDropMenu = styled.a`
text-decoration: none;
color: white;
padding: 0px 20px;
display:block;
`;

export const BoxConteudoDropMenu = styled.ul`
list-style: none;
display: ${props => props.visivel};
`;

export const SubBoxConteudoDropMenu = styled.li`
background-color: black;
`;

export const ConteudoDropMenu = styled.a`
color: white;
display:block;
padding: 0px 20px;
text-decoration: none;
:hover{
    background-color: rgba(255,255,255,.3)
}
`;