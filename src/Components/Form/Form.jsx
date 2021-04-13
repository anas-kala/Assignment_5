import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const Wrapper = styled.form`
    height: 100px;
    vertical-align: middle;
    margin: 10px;
`;
const Label = styled.label`
    margin: inherit inherit inherit 15px;
    padding-bottom: 20px;
`;

const Input = styled.input`
    margin: inherit 0 inherit inherit;
    width: 1200px;
    height: 20px;
`;

const P=styled.p`
    color: #7c795d; 
    font-family: 'Trocchi', serif; 
    font-size: 45px; 
    font-weight: normal; 
    line-height: 48px; 
    margin: 0; 
`;

const But=styled.button`
letter-spacing: 0.1em;
cursor: pointer;
font-size: 14px;
font-weight: 400;
line-height: 45px;
max-width: 160px;
position: relative;
text-decoration: none;
text-transform: uppercase;
width: 100%;
margin-top: 12px;
`;
// const Wrapper = styled.section`
//     padding: 4px;
//     vertical-align: ;
// `;

const Form = () => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();
    const unreadMsgs=useSelector(state=>{
        return state.messages.filter(function(element){
            return element.readMsg === false;
        }).length
    });

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     setSubject("");
    //     setBody("");
    // }

    return (
        <>
            <Wrapper onSubmit={e => e.preventDefault()}>

                <Label for="msgSubject">Subject of the message</Label>
                <Input type="text" name="msgSubject" id="msgSubject" value={subject} onChange={event => setSubject(event.target.value)} />
                <br></br>
                <Label for="msgBody">Body of the message</Label>
                <Input type="text" name="msgBody" id="msgBody" value={body} onChange={event => setBody(event.target.value)} />
                <br></br>
                <But type="submit" onClick={
                    () => {
                        dispatch({ type: 'SUBMITFORM', sub: subject, bod: body })
                    }
                }
                // onClickCapture={event => handleSubmit}
                >Submit</But>
            </Wrapper>
            <br></br>
            <br></br>
            <br></br>
            <P>number of unread messages {unreadMsgs}</P>
        </>
    );
}

export default Form;