import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    margin: inherit inherit inherit 15px;
    padding-bottom: 20px;
`;

const Input = styled.input`
    margin: inherit 0 inherit inherit;
    width: 1200px;
    height: 90px;
`;

const Wrapper = styled.section`
    padding: 4px;
    position: relative;
`;

const Body = () => {
    return (
        <Wrapper>
            <Label>Body of the message</Label>
            <Input type="text" name="body" />
        </Wrapper>
    );
}

export default Body;