'use client';

import {Logo} from "@/components/Logo";
import styles from './Navbar.module.scss';
import {NavContacts} from "@/components/NavContacts";
import {useEffect, useState} from "react";
import {NavList} from "@/components/NavList";

export const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
            <Logo/>
            <NavList/>
            <NavContacts/>
        </header>
    );
};