'use client';
import Image from "next/image";
import ArrowUpIcon from '../../../public/arrow-up.svg';
import styles from './ScrollToTopButton.module.scss';

export const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <button
            onClick={scrollToTop}
            className={styles.scrollToTop}
            title="Вернуться в начало"
        >
            <Image width={40} src={ArrowUpIcon} alt=''/>
        </button>
    );
}
