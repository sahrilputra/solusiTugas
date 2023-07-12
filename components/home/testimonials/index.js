import React from 'react'
import styles from './styles.module.scss'
export const Testimonials = () => {
  return (
    <div className={styles.container}>
        <div className={styles.container__img}>
            <img src="../../shape/quote.png" alt="quotes" />
        </div>
        <div className={styles.container__review}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, non!</p>
        </div>

        <div className={styles.container__title}>
            <div className={styles.container__title__img}>

            </div>
            <div className={styles.container__title__name}>
                <h1>NAME</h1>
                <p>STATUS</p>
            </div>
        </div>
    </div>
  )
}
