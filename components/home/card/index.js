import React from 'react'
import styles from './styles.module.scss'
export const CardItems = ({ icon, title, secTitle, param }) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__container}>
                    <div className={styles.card__container__item}>
                        <div className={styles.card__container__icon}>
                            {icon}
                        </div>

                        <div className={styles.card__container__title}>
                            <h2>{secTitle}</h2>
                            <h1>{title}</h1>
                        </div>

                    </div>

                    <div className={styles.card__container__param}>
                        <p>{param}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
