import styles from './CustomersLinks.module.scss';
import {customersData} from "@/components/CustomersLinks/customersData";
import Image from "next/image";

export const CustomersLinks = () =>
    (
        <ul className={styles.list}>
            {customersData.map(({image, websiteUrl, title}) => (
                <li key={title}>
                    <a href={websiteUrl}>
                        <Image className={styles.customerImage} src={image} alt={title}/>
                    </a>
                </li>
            ))}
        </ul>
    );