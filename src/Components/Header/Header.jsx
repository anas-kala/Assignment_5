import React from 'react';
// import './Header.style.css';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

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


const Header = () => {
    const dispatch=useDispatch();
    const unreadMsgs=useSelector(state=>{
        return state.messages.filter(function(element){
            return element.readMsg === false;
        }).length
    });
    return (
            <UL>
                <Wrapper>
                <LI onClick={() => dispatch({ type: 'SHOWFORM'})}>
                    <LA href="#news">Add new message</LA>
                </LI>
                </Wrapper>
                <Wrapper>
                <LI onClick={()=> dispatch({type:'SHOWMESSAGES'})}>
                    <LA class="active" href="#home">Message ({unreadMsgs} new)</LA>
                </LI>
                </Wrapper>
            </UL>
    );
}

export default Header;