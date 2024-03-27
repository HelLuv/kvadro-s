import Image from "next/image";
import LogoImage from "../../../public/logo.png";
import styles from './Logo.module.css';

export const Logo = () =>
    (
        <a href="#" className={styles.logoWrapper}>
            <Image src={LogoImage} alt="КвадроCтрой" width={80} className={styles.logo}/>

            <span className={styles.nameWrapper}>
                <span>Компания</span>
                <span>КвадроСтрой</span>
            </span>
            <span className={styles.description}>простое решение сложных вопросов</span>
        </a>
    );