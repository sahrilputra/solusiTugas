import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'

export const Footers = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer__container}>
                    <div className={styles.footer__icon}>
                        <div className={styles.footer__logo}>
                            <img src="../../logo.png" alt="solusitugasku logo" />
                            <div className="site-heading">
                                <h4>Solusi Tugasku</h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer__items}>
                        <ul className={styles.footer__ul}>
                            <li className={styles.footer__ul__li}>
                                <h4>Home</h4>
                                <Link href="/orders">
                                    <p>Cara Order</p>
                                </Link>
                                <Link href="/tugas">
                                    <p>Tugas</p>
                                </Link>
                            </li>
                            <li className={styles.footer__ul__li}>
                                <h4>Tentang</h4>
                                <Link href="/">
                                    <p>Tentang Kami</p>
                                </Link>
                            </li>
                            <li className={styles.footer__ul__li}>
                                <h4>Blog</h4>
                                <Link href="/blog">
                                    <p>Blog Page</p>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className={styles.footer__wrap}>
                    <p className=' text-white text-center'>© 2023 Solusi Tugasku™</p>

                    <div className={styles.footer__socials}>
                        <Link href="https://wasap.at/RJbAiR">
                            <BsWhatsapp size={20} />
                        </Link>
                        <Link href="#">
                            <BsFacebook size={20} />
                        </Link>
                        <Link href="#">
                            <BsInstagram size={20} />
                        </Link>
                    </div>

                </div>
                <hr />
            </div>
        </>
    )
}
