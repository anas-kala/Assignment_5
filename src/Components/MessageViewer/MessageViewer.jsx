import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const Wrapper=styled.div`
background-color: cadetblue;
`;

const H1=styled.h1`
    color: red;
`;

const P=styled.p`
    color: orange;
`;

const MessageVeiwer = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => {
        return state.messages;
    });
    const counter = useSelector(state => {
        return state.counter;
    });

    return (
        <>
            {/* <p>the length is :{counter}</p>
            <h1>{msgSubject}</h1>
            <button onClick={()=>dispatch({ type: 'NEWMESSAGE'})}>click here</button>
            <h1>{counter}</h1> */}
            <ul>
                {messages.map((item, index) => {
                    return <li key={index}>
                        <Wrapper>
                            <H1>{item.msgSubject}</H1>
                            <P>{item.msgBody}</P>
                        </Wrapper>
                    </li>
                })}
            </ul>
        </>

    );
};


export default MessageVeiwer;