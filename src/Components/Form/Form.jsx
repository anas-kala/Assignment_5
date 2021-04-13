import React, { useState } from 'react';
import Body from '../Body/Body';
// import Button from '../Button/Button';
// import Subject from '../Subject/Subject';
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

// const Wrapper = styled.section`
//     padding: 4px;
//     vertical-align: ;
// `;

const Form = () => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        setSubject("");
        setBody("");
    }

    const selector = useSelector(state => {
        return state.messages.length;
    });
    return (
        <>
            <Wrapper onSubmit={e => e.preventDefault()}>

                <Label for="msgSubject">Subject of the message</Label>
                <Input type="text" name="msgSubject" id="msgSubject" value={subject} onChange={event => setSubject(event.target.value)} />
                <br></br>
                <Label for="msgBody">Body of the message</Label>
                <Input type="text" name="msgBody" id="msgBody" value={body} onChange={event => setBody(event.target.value)} />
                <br></br>
                <button type="submit" onClick={
                    () => {
                        dispatch({ type: 'SUBMITFORM', sub: subject, bod: body })
                    }
                }
                onSubmit={handleSubmit}
                >Submit</button>
            </Wrapper>
            <p>number of elements in the array is {selector}</p>
        </>
    );
}

export default Form;