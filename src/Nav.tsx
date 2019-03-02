import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'
// import ShareBar from './ShareBar'

const Nav = () => (
    <nav>
        {/*<a href="/">HOME</a>*/}
        <Link to='/lupa'>LUPA</Link>
        <Link to='/sketch'>SKETCH</Link>
        <Link to='/play'>PLAY</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/'>HOME</Link>
    </nav>
);

export default Nav;