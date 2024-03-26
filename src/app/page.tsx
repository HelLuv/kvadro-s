import styles from "./page.module.scss";
import {Navbar} from "@/widgets/Havbar";
import {Hero} from "@/views/Hero";
import {Services} from "@/views/Services";
import {AboutUs} from "@/views/AboutUs";
import {Customers} from "@/views/Customers";
import {Contacts} from "@/views/Contacts";
import {Footer} from "@/components/Footer";
import {ScrollToTopButton} from "@/components/ScrollToTopButton";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Navbar/>
                <Hero/>
                <Services/>
                <AboutUs/>
                <Customers/>
                <Contacts/>
            </main>
            <Footer/>
            <ScrollToTopButton/>
        </>
    );
}
