import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = ({setShowPages}) => {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 100 ) {
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return (
        <div>
            {show
            ? <></>
            :
            <div className={s.navbar__wrapper}>
                <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/home'>HOME</Link>
                <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/people'>PEOPLE</Link>
                <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/documental'>DOCUMENTAL</Link>
                <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/body'>BODY</Link>
                <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/contacts'>CONTACTS</Link>
            </div>
            }
        </div>
    );
};

export default Navbar;