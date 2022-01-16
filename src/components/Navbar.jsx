import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = ({setShowPages}) => {
    return (
        <div className={s.navbar__wrapper}>
            <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/home'>HOME</Link>
            <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/people'>PEOPLE</Link>
            <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/documental'>DOCUMENTAL</Link>
            <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/body'>BODY</Link>
            {/* <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/still_life'>STILL LIFE</Link> */}
            <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/contacts'>CONTACTS</Link>
        </div>
    );
};

export default Navbar;