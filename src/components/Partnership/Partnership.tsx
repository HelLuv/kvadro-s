import styles from './Partnership.module.scss';


export const Partnership = () => {

    return (
        <div className={styles.partnerWrapper}>
            <div className={styles.emptyBlock}></div>
            <h4 className={styles.partnerHeader}>
                Всегда рады взаимовыгодному
                сотрудничеству!
            </h4>
        </div>

    );
};