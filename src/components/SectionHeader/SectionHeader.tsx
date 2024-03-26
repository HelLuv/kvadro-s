import styles from './SectionHeader.module.scss';


interface SectionHeaderProps {
    title: string;
}

export const SectionHeader = (props: SectionHeaderProps) => {
    const {title} = props;

    return (
        <div className={styles.headerWrapper}>
            <h2 className={styles.header} title={title}>{title}</h2>

        </div>
    );
};