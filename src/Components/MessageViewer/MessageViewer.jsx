import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// const Wrapper=styled.div`
// background-color: blue;
// `;
const Wrapper=styled.div`
    background-color: ${({color})=>(
        color===true? 'orange': 'blue'
    )};
`;

const H1=styled.h1`
    color: red;
`;

const P=styled.p`
    color: yellow;
`;

const MessageVeiwer = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => {
        return state.messages;
    });
 
    return (
        <>
            <ul>
                {messages.map((item, index) => {
                    return <li key={index}>
                        <Wrapper onClick={() => dispatch({ type: 'SETMESSAGEREAD',ind: index})} color={item.readMsg}>
                            <H1>{item.msgSubject}</H1>
                            <P>{item.msgBody}</P>
                            <P>message read: {item.readMsg===true?'already read':'not yet read'}</P>
                        </Wrapper>
                    </li>
                })}
            </ul>
        </>

    );
};


export default MessageVeiwer;