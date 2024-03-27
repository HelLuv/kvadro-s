import { serviceData} from "@/widgets/ServiceCards/serviceData";
import {ServiceCard} from "@/components/ServiceCard";
import  styles from './ServiceCards.module.scss';

export const ServiceCards = () =>
    (
        <div className={styles.cards}>
            {serviceData.map((serviceItem) => (
                <ServiceCard serviceItem={serviceItem} key={serviceItem.title}/>
            ))}
        </div>
    );