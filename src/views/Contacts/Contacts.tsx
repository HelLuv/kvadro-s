import styles from './Contacts.module.scss';
import {SectionAnchor} from "@/components/SectionAnchor";
import {SectionHeader} from "@/components/SectionHeader";
import {GoogleMapsLocation} from "@/components/GoogleMapsLocation";
import {FeedbackForm} from "@/widgets/FeedbackForm";
import {ContactsList} from "@/widgets/ContactsList";
import {Director} from "@/components/Director";
import {Partnership} from "@/components/Partnership";


export const Contacts = () => {

    return (
        <section className={styles.contactsSection}>
            <SectionAnchor sectionId="contactsSectionAnchor"/>
            <SectionHeader title="КОНТАКТЫ"/>
            <GoogleMapsLocation/>

            <div className={styles.feedbackWrapper}>
                <FeedbackForm/>

                <div className={styles.rightColumn}>
                    <ContactsList/>
                    <Director/>
                </div>
            </div>
            <Partnership/>
        </section>
    );
};