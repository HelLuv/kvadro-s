import styles from './AboutUs.module.scss';
import {SectionAnchor} from "@/components/SectionAnchor";
import {AboutUsBanner} from "@/components/AboutUsBanner";
import {AboutUsInfo} from "@/components/AboutUsInfo";


export const AboutUs = () => {

    return (
        <section className={styles.aboutUsSection}>
            <SectionAnchor sectionId="aboutUsSectionAnchor"/>
            <div className={styles.cover}></div>

            <AboutUsInfo/>

            <AboutUsBanner/>
        </section>
    );
};