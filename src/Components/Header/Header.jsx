import React from 'react';
import './Header.style.css';
import styled from 'styled-components';

const UL = <styled className="ul">
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
</styled>


const LI = <styled className="li">
        float: right;
</styled>

const LIA = <styled className="li a">
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
</styled>

const LIAH = <styled className="LIA_hover">
    background-color: #111;
</styled>

const Header = (props) => {
    return (
        <div>
            <ul>
                <li><a href="#news">Add new message</a></li>
                <li><a class="active" href="#home">Message ({props.number} new)</a></li>
                {/* <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li> */}
            </ul>
        </div>
        // <div>
        //     <UL>
        //         <LI>
        //             <a href="#news">Add new message</a>
        //         </LI>
        //         <LI>
        //             <li><a class="active" href="#home">Message ({props.number} new)</a></li>
        //         </LI>
        //     </UL>
        // </div>
    );
}

export default Header;