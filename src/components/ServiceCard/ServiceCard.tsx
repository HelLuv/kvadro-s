import {ReactNode} from 'react';
import styles from './ServiceCard.module.scss';
import Image from "next/image";
import {ServiceCardItem} from "@/types/types";

interface ServiceCardProps {
    children?: ReactNode;
    serviceItem: ServiceCardItem;
}

export const ServiceCard = (props: ServiceCardProps) => {
    const {
        serviceItem: {servicesList, title, image}
    } = props;

    return (
        <div className={styles.cardWrapper}>
            <Image src={image} alt={title}/>

            <h3 className={styles.header}>{title}</h3>

            <ul className={styles.services}>
                {servicesList.map(serviceItem => (
                    <li key={serviceItem}> - {serviceItem}</li>
                ))}
            </ul>
        </div>
    );
};