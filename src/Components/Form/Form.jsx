import React from 'react';
import Body from '../Body/Body';
import Button from '../Button/Button';
import Subject from '../Subject/Subject';
import styled from 'styled-components';

const Wrapper=styled.form`
    height: 100px;
    vertical-align: middle;
    margin: 10px;
`;

const Form = () => {
    return (
        <Wrapper>
            <Subject number={4}></Subject>
            <Body></Body>
            <Button type="submit" buttonName="submit" ></Button>
        </Wrapper>
    );
}

export default Form;