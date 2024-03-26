import styles from './FeedbackForm.module.scss';

export const FeedbackForm = () => {
    return (
        <div className={styles.feedbackFormWrapper}>
            <h3 className={styles.feedbackHeader}>
                Ответы на вопросы
            </h3>
            <p className={styles.description}>С удовольствием ответим на все ваши вопросы по телефону, или просто
                заполните форму ниже:</p>

            <form action="" className={styles.feedbackForm}>
                <div className={styles.formItem}>
                    <label htmlFor="username">
                        Имя:
                    </label>
                    <input id="username" type="text" name="username"/>
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="email">
                        Эл. почта: <span aria-label="required">*</span>
                    </label>
                    <input id="email" type="email" name="email" required/>
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="phonenumber">
                        Телефон:
                    </label>
                    <input id="phonenumber" type="tel" name="phonenumber"/>
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="message">
                        Оставьте сообщение...:
                    </label>
                    <textarea rows={5} id="message" name="message"/>
                </div>

                <div className={styles.buttonWrapper}>
                    <button type="submit">Отправить</button>
                </div>
            </form>
        </div>
    );
};