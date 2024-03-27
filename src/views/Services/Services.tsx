import styles from './Services.module.scss';
import {ServiceCards} from "@/widgets/ServiceCards";
import {SectionAnchor} from "@/components/SectionAnchor";
import {SectionHeader} from "@/components/SectionHeader";

export const Services = () =>
    (
        <section className={styles.servicesSection}>
            <SectionAnchor sectionId="serviceSectionAnchor"/>
            <SectionHeader title="УСЛУГИ"/>
            <ServiceCards/>
        </section>
    );