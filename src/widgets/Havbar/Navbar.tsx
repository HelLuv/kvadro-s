'use client';

import {Logo} from "@/components/Logo";
import {NavList} from "@/components/NavList";
import styles from './Navbar.module.css';
import {NavContacts} from "@/components/NavContacts";
import {useEffect, useState} from "react";

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