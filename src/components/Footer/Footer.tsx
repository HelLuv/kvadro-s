import styles from './Footer.module.scss';


export const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <footer className={styles.footer}>
            <p>© {currentYear} Компания &quot;Квадрострой&quot;</p>
        </footer>
    );
};