import React from 'react'
import { PiWhatsappLogo } from 'react-icons/pi'
import { BsWhatsapp } from 'react-icons/bs'
import {IoCloseCircleOutline} from 'react-icons/io'
import styles from './styles.module.scss'
import Link from 'next/link'
export const FloatIcons = () => {
    return (
        <>
            <div className={styles.icons}>
                <p>Kosultasi Sekarang!</p>
                <Link
                    className={styles.icons__link}
                    href={"#"}
                >
                    <BsWhatsapp size={20} className={styles.icons__wa} />
                </Link>
            </div>
        </>
    )
}
