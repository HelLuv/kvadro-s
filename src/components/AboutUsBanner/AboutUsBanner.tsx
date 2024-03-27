import styles from './AboutUsBanner.module.scss';

export const AboutUsBanner = () =>
    (
        <div className={styles.bannerWrapper}>
            <div className={styles.banner}>
                <div className={styles.aboutItem}>
              <span>
                  Год <br/> основания
              </span>
                    <h6>2007</h6>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.aboutItem}>
                    <span>Более</span>
                    <h6>2007</h6>
                    <span>завершенных <br/> проектов</span>
                </div>
            </div>
        </div>

    );