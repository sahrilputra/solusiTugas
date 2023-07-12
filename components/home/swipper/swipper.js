import React from 'react'
import styles from './styles.module.scss'
export const MySwipper = ({title, param, icon}) => {
    return (
        <>
            <div className={styles.swiper}>
                <div className={styles.swiper__container}>
                   {icon}
                    <div className={styles.swiper__container__text}>
                        <h1>{title}</h1>
                        <p>{param}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
