import React from 'react';
import Body from '../Body/Body';
import Button from '../Button/Button';
import Subject from '../Subject/Subject';
import './Form.style.css';

const Form = () => {
    return (
        <div>
            <Subject number={4}></Subject>
            <Body></Body>
            <Button buttonName="submit"></Button>
        </div>
    );
}

export default Form;