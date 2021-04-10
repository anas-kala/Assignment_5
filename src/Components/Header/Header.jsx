import React from 'react';
import './Header.style.css';

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
    );
}

export default Header;