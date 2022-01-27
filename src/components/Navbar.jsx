import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useWindowDimensions from './hooks/useWindowDimensions';
import s from './Navbar.module.css';

const Navbar = ({setShowPages}) => {
    const [show, setShow] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    console.log(activeMenu)
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
    }, []);

    const { width } = useWindowDimensions();

    return (
        <div className={s.navbar__wrapper}>
            {width <= 576
            ?
            <div>
                <div className={s.burger_btn} onClick={() => setActiveMenu(activeMenu => !activeMenu)}><span/></div>
                {activeMenu
                ?
                <div className={s.menu}>
                    <div className={s.menu__content}>
                        <Link onClick={() => {setShowPages(true); setActiveMenu(false)}} className={s.navbar__burger_links} to='/home'>HOME</Link>
                        <Link onClick={() => {setShowPages(true); setActiveMenu(false)}} className={s.navbar__burger_links} to='/people'>PEOPLE</Link>
                        <Link onClick={() => {setShowPages(true); setActiveMenu(false)}} className={s.navbar__burger_links} to='/documental'>DOCUMENTAL</Link>
                        <Link onClick={() => {setShowPages(true); setActiveMenu(false)}} className={s.navbar__burger_links} to='/body'>BODY</Link>
                        <Link onClick={() => {setShowPages(true); setActiveMenu(false)}} className={s.navbar__burger_links} to='/contacts'>CONTACTS</Link>
                    </div>
                </div>
                : <></>
                }
            </div>
            :
            <div>
                {show
                ? <></>
                :
                <div className={s.navbar__links_wrapper}>
                    <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/home'>HOME</Link>
                    <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/people'>PEOPLE</Link>
                    <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/documental'>DOCUMENTAL</Link>
                    <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/body'>BODY</Link>
                    <Link onClick={() => setShowPages(true)} className={s.navbar__links} to='/contacts'>CONTACTS</Link>
                </div>
                }
            </div>
            }
        </div>
    );
};

export default Navbar;