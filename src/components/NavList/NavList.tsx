import React, {useState} from 'react';
import  styles from './NavList.module.scss';
import {NAV_LINKS} from "./navlinks";

export const NavList = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
            <nav className={styles.navList}>
                <div className={styles.menuToggle} onClick={toggleMenu}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                    {NAV_LINKS.map(({url, text}) => (
                        <li key={url}>
                            <a href={url}>{text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
    );
};
