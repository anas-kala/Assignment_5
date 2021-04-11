import React from 'react';
// import './Header.style.css';
import styled from 'styled-components';

const UL = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: cadetblue;
`;

const LI = styled.li`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`;

const LA = styled.a`
display: block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
`;



const Wrapper = styled.a`
  &:hover ${LA} {
    background-color: blue;
  },
 `;


const Header = (props) => {
    return (
            <UL>
                <Wrapper>
                <LI>
                    <LA href="#news">Add new message</LA>
                </LI>
                </Wrapper>
                <Wrapper>
                <LI>
                    <LA class="active" href="#home">Message ({props.number} new)</LA>
                </LI>
                </Wrapper>
            </UL>
    );
}

export default Header;