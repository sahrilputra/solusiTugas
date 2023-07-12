import React from 'react'
import styles from './styles.module.scss'

export const BlogCard = ({title, authors, date, text}) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__img}>

                </div>
                <div className={styles.card__container}>

                    <div className={styles.card__date}>
                        <p>Juni 25, 2023</p>
                    </div>
                    <div className={styles.card__items}>
                        <div className={styles.card__items__author}>
                            <div className={styles.card__items__author__img}>

                            </div>
                            <p> by <span className='text-light-blue-700'>AUTHORS</span></p>

                        </div>
                        <div className={styles.card__items__title}>
                            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                        </div>
                        <div className={styles.card__items__text}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam dolore nobis.</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
