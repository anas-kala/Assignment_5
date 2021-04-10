import React from 'react';
import './Header.style.css';
import styled from 'styled-components';

const UL = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: #333;
`;

const LI = styled.li`
    float: right:
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
    background-color: #111;
  },
  &:hover ${LI} {
    background-color: #111;
  }
  `;


const Header = (props) => {
    return (
        // <div>
        //     <ul>
        //         <li><a href="#news">Add new message</a></li>
        //         <li><a class="active" href="#home">Message ({props.number} new)</a></li>
        //         {/* <li><a href="#contact">Contact</a></li>
        //         <li><a href="#about">About</a></li> */}
        //     </ul>
        // </div>
        <Wrapper>
            <UL>
                <LI>
                    <LA href="#news">Add new message</LA>
                </LI>
                <LI>
                    <LA class="active" href="#home">Message ({props.number} new)</LA>
                </LI>
            </UL>
        </Wrapper>
    );
}

export default Header;