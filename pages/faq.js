import React from 'react'
import { Button } from '@material-tailwind/react'
import styles from '../styles/Orders.module.scss'
import { PiArrowUpRight, PiStudent, PiNotePencil, PiInstagramLogo, PiWhatsappLogoLight, PiWhatsappLogo, PiFacebookLogo } from 'react-icons/pi';
import { Accordian } from '../components/home/accordian';

const faq = () => {
    return (
        <>
            <div className={styles.order}>
                <div className={styles.order__hero}>
                    <div className={styles.order__hero__img}>
                        <img src="../../figure/orders.png" alt="cara orderss" />
                    </div>
                    <div className={styles.order__hero__text}>
                        <div className="site-heading">
                            <h4>FAQ</h4>
                            <h2 className=' text-3xl'>Yang Sering Orang Tanyakan</h2>
                            <div className="devider" />
                        </div>
                    </div>
                </div>

                <div className={styles.order__logo}>
                    <img src="../../logo.png" alt="logo solusitugasku" />
                    <div className={styles.order__logo__text}>
                        <h1>Solusi Tugasku</h1>
                        <p>Solusi Tugasku adalah Jasa Pengerjaan Tugas Kuliah Bidang Fakultas Ekonomi & Bisnis dengan memprioritaskan Kualitas Jawaban, Ketepatan Waktu & Kepuasan Nilai.</p>
                    </div>
                </div>
                <div className={styles.order__timeline}>
                    <div className="site-heading text-center">
                        <h4>FAQ</h4>
                        <h2 className=' text-3xl'>Yang Paling Sering Ditanyakan</h2>
                        <div className="devider" />
                    </div>
                    <div className={styles.order__timeline__in}>
                        <Accordian />
                    </div>
                </div>
            </div>

            <div className={styles.add}>
                <div className={styles.add__container}>
                    <div className={styles.add__container__img}>
                        <img src="../../figure/relax.png" alt="relax figure" />
                    </div>
                    <div className={styles.add__container__text}>
                        <div className="site-heading">
                            <h4>Masih Ragu ?</h4>
                            <h2 className=' text-3xl capitalize'>Temui Kami Di Sosial Media Kami </h2>
                            <div className="devider" />
                            <div className={styles.add__container__text__socials}>
                                <Button className="mt-3 flex items-center gap-3">
                                    <PiWhatsappLogoLight size={20} />
                                    WHATSAPP
                                </Button>
                                <Button className="mt-3 flex items-center gap-3">
                                    <PiFacebookLogo size={20} />
                                    FACEBOOK
                                </Button>
                                <Button className="mt-3 flex items-center gap-3">
                                    <PiInstagramLogo size={20} />
                                    INSTAGRAM
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default faq