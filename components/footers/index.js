import React from 'react'
import { Typography } from "@material-tailwind/react";
import styles from './styles.module.scss'
import Image from 'next/image';
import { Button } from 'flowbite-react';

import { Footer } from 'flowbite-react';
const currentYear = new Date().getFullYear();
export const Footers = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer__container}>
                    <div className={styles.footer__icon}>
                        <img src="../../logo.png" alt="solusitugasku logo" />
                        <div className="site-heading">
                            <h4>Solusi Tugasku</h4>
                        </div>
                    </div>
                    <div className={styles.footer__items}>
                        <p>About Us</p>
                        <p>License</p>
                        <p>Contribute</p>
                        <p>Hubungi Kami</p>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}
