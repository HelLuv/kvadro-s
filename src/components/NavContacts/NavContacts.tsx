import Image from "next/image";

import PhoneIcon from "../../../public/phone.svg";
import EmailIcon from "../../../public/email.svg";
import styles from './NavContacts.module.scss';


export const NavContacts = () => {

    return (
        <ul className={styles.contactsWrapper}>
            <li>
                <a href="tel:+7 (831) 282-11-36">
                    <Image width={26} src={PhoneIcon} alt="phone icon"/>
                    <span>+7 (831) 282-11-36</span>
                </a>
            </li>
            <li>
                <a href="mailto:kvadros07@mail.ru">
                    <Image width={26} src={EmailIcon} alt="email icon"/>
                    <span>kvadros07@mail.ru</span>
                </a>
            </li>
        </ul>
    );
};