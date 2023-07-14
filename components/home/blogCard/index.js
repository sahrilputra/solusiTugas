import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

export const BlogCard = ({post}) => {

    const {image, Title, Penulis, Sub, Tanggal} = post.frontmatter
    const truncatedTitle = Title.length > 43 ? Title.slice(0, 43) + '...' : Title
    const truncatedSub = Sub.length > 100 ? Sub.slice(0, 100) + '...' : Title
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__img}>
                    <img src={image} alt="blog image" />
                </div>
                <div className={styles.card__container}>

                    <div className={styles.card__date}>
                        <p>{Tanggal}</p>
                    </div>
                    <div className={styles.card__items}>
                        <div className={styles.card__items__author}>
                            <div className={styles.card__items__author__img}>

                            </div>
                            <p> by <span className='text-light-blue-700'>{Penulis}</span></p>

                        </div>
                        <div className={styles.card__items__title}>
                            <Link href={`/blog/${post.slug}`}>
                            <h4>{truncatedTitle}</h4>
                            </Link>
                        </div>
                        <div className={styles.card__items__text}>
                            <p>{truncatedSub}</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export const BlogStatic = ({ Title, Penulis, image, Sub, Tanggal}) => {

    const truncatedTitle = Title.length > 43 ? Title.slice(0, 43) + '...' : Title
    const truncatedSub = Sub.length > 100 ? Sub.slice(0, 100) + '...' : Title
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__img}>
                    <img src={image} alt="blog image" />
                </div>
                <div className={styles.card__container}>

                    <div className={styles.card__date}>
                        <p>{Tanggal}</p>
                    </div>
                    <div className={styles.card__items}>
                        <div className={styles.card__items__author}>
                            <div className={styles.card__items__author__img}>

                            </div>
                            <p> by <span className='text-light-blue-700'>{Penulis}</span></p>

                        </div>
                        <div className={styles.card__items__title}>
                           
                            <h4>{truncatedTitle}</h4>
                          
                        </div>
                        <div className={styles.card__items__text}>
                            <p>{truncatedSub}</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
