import React from 'react';
import styled from 'styled-components';

const ButtonStyling=styled.button`
background-color: #4CAF50; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
text-emphasis-color: red;
`;

const Button=(props)=>{
    return(
        <ButtonStyling type="submit">{props.buttonName}</ButtonStyling>
    );
}

export default Button;