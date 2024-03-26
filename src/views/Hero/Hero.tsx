import styles from './Hero.module.scss';
import ArrowDownIcon from '../../../public/arrow-down.png';
import Image from "next/image";

export const Hero = () => {

    return (
        <section className={styles.heroSection}>
            <div className={styles.headers}>
                <h1>
                    ПРОЕКТИРОВАНИЕ, МОНТАЖ,
                    СЕРВИСНОЕ ОБСЛУЖИВАНИЕ
                </h1>
                <h2>
                    систем теплоснабжения, водоснабжения и канализации
                </h2>
            </div>

            <a href="#serviceSectionAnchor" className={styles.scrollLink}>
                <h3 className={styles.contractor}>
                    Подрядчик по устройству инженерных коммуникаций, которому можно
                    доверять
                </h3>

                <Image src={ArrowDownIcon} alt="Скролл вниз"/>
            </a>
        </section>
    );
};