import styles from './Director.module.scss';


export const Director = () =>
    (
        <div className={styles.directorWrapper}>
            <h3 className={styles.directorHeader}>Генеральный директор</h3>

            <p>Чернышов Александр Николаевич</p>
        </div>
    );