import React, { useState } from 'react'
import { PiWhatsappLogo } from 'react-icons/pi'
import { BsWhatsapp } from 'react-icons/bs'
import { IoCloseCircleOutline } from "react-icons/io5";
import styles from './styles.module.scss'
import Link from 'next/link'
export const FloatIcons = () => {

    const [hidden, setHidden] = useState(false)

    const handeClick = () => {
        setHidden(true)
    }

    return (
        <>
            <div className={styles.icons}>
                <div className={styles.icons__wrap}>
                    {!hidden && (
                        <>
                            <IoCloseCircleOutline className={styles.icons__close} size={18} onClick={handeClick} />
                            <div className={`${styles.icons__text} ${hidden ? "hide" : ""}`}>
                                <p>
                                    Kosultasi Sekarang!
                                </p>
                            </div>
                        </>
                    )}
                </div>

                <Link
                    className={styles.icons__link}
                    href={"https://wasap.at/RJbAiR"}
                >
                    <BsWhatsapp size={20} className={styles.icons__wa} />
                </Link>
            </div>
        </>
    )
}
