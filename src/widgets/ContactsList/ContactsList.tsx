import styles from './ContactsList.module.scss';
import EmailIcon from '../../../public/email.svg';
import PhoneIcon from "../../../public/phone.svg";
import LocationIcon from '../../../public/location.svg';
import Image from "next/image";

export const ContactsList = () => {

    return (
        <address className={styles.contactList}>
            <h3 className={styles.contactsListHeader}>Офис</h3>

            <ul>
                <li className={styles.contactItem}>
                    <a href="">
                        <Image width={30} src={LocationIcon} alt="Адрес"/>
                    </a>
                    <span>
                        г. Нижний Новгород, ул. Невская,<br/> дом 19а, офис 207
                    </span>
                </li>
                <li className={styles.contactItem}>
                    <a href="mailto:kvadros07@mail.ru">
                        <Image width={26} src={EmailIcon} alt="Отправить эл. письмо"/>
                    </a>
                    <span>
                        kvadros07@mail.ru
                    </span>
                </li>
                <li className={styles.contactItem}>
                    <a href="tel:+7 (831) 282-11-36">
                        <Image width={26} src={PhoneIcon} alt="Позвонить"/>
                    </a>
                    <span>
                        Телефон: +7 (831) 282-11-36 <br/>
                        Пн - Пт c 8.00 до 16.00
                    </span>
                </li>
            </ul>
        </address>
    );
};