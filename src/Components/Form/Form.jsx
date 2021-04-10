import React from 'react';
import Body from '../Body/Body';
import Subject from '../Subject/Subject';
import './Form.style.css';

const Form = () => {
    return (
        <div>
            <Subject number={4}></Subject>
            <Body></Body>
        </div>
    );
}

export default Form;