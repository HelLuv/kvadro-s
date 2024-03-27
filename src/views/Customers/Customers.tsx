import styles from './Customers.module.scss';
import {SectionAnchor} from "@/components/SectionAnchor";
import {SectionHeader} from "@/components/SectionHeader";
import {CustomersLinks} from "@/components/CustomersLinks";
import {Reviews} from "@/components/Reviews";

export const Customers = () =>
    (
        <section className={styles.customersSection}>
            <SectionAnchor sectionId="customersSectionAnchor"/>
            <SectionHeader title="НАШИ ЗАКАЗЧИКИ"/>
            <CustomersLinks/>
            <Reviews/>
        </section>
    );