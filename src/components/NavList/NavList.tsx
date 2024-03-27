import styles from "./NavList.module.scss"

export const NavList = () =>
    (
        <nav>
            <ul className={styles.navList}>
                <li>
                    <a href="#">ГЛАВНАЯ</a>
                </li>
                <li>
                    <a href="#serviceSectionAnchor">УСЛУГИ</a>
                </li>
                <li>
                    <a href="#aboutUsSectionAnchor">О НАС</a>
                </li>
                <li>
                    <a href="#customersSectionAnchor">НАШИ ЗАКАЗЧИКИ</a>
                </li>
                <li>
                    <a href="#contactsSectionAnchor">КОНТАКТЫ</a>
                </li>
            </ul>
        </nav>
    );