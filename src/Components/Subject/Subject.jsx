import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    margin: inherit inherit inherit 15px;
    padding-bottom: 20px;
`;

const Input = styled.input`
    margin: inherit 0 inherit inherit;
    width: 1200px;
    height: 20px;
`;

const Wrapper = styled.section`
    padding: 4px;
    vertical-align: ;
`;

const Subject = () => {
    return (
        <Wrapper>
            <Label>Subject</Label>
            <Input type="text" name="subject" />
        </Wrapper>
    );
}

export default Subject;
