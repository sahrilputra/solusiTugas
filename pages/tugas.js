import React from 'react'
import Link from 'next/link';
import styles from '../styles/Orders.module.scss'
import { MySwipper } from '../components/home/swipper/swipper'
import { PiArrowUpRight, PiStudent, PiNotePencil, PiInstagramLogo, PiWhatsappLogoLight, PiWhatsappLogo, PiFacebookLogo } from 'react-icons/pi';

import {
    PiPresentationChartLight,
    PiNewspaper, PiNewspaperClipping,
    PiPencilSimpleLine, PiBookOpenLight
} from "react-icons/pi";

import { Button } from '@material-tailwind/react';

const tugas = () => {
    return (
        <div className={styles.order}>
            <div className={styles.order__hero}>
                <div className={styles.order__hero__img}>
                    <img src="../../figure/orders.png" alt="cara orderss" />
                </div>
                <div className={styles.order__hero__text}>
                    <div className="site-heading">
                        <h4>Kumpulan Tugas</h4>
                        <h2 className=' text-3xl'>Kumpulan Tugas</h2>
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
                    <h4>Kumpulan Tugas</h4>
                    <h2 className=' text-3xl'>Kumpulan Tugas Yang Kami Kerjakan</h2>
                    <div className="devider" />
                </div>
                <div className={styles.order__tugas}>
                    <MySwipper className="shadow-xl" icon={<PiPresentationChartLight size={35} />} title={"PPT"} param={"Tugas Power Point"} />
                    <MySwipper icon={<PiNewspaper size={35} />} title={"Makalah"} param={"Tugas Makalah"} />
                    <MySwipper icon={<PiPencilSimpleLine size={35} />} title={"Essay"} param={"Tugas Essay"} />
                    <MySwipper icon={<PiNewspaperClipping size={35} />} title={"Jurnal"} param={"Tugas Jurnal"} />
                    <MySwipper icon={<PiBookOpenLight size={35} />} title={"Skripsi"} param={"Tugas Skripsi"} />
                </div>

                <div className={styles.order__content}>
                    <div className="site-heading text-center mt-6">
                        <h2 className=' text-3xl'>Konsultasi Langsung Dengan Kami</h2>
                        <Link href="https://wasap.at/RJbAiR">
                            <Button className=' mt-5'> Mulai Konsultasi </Button>
                        </Link>
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
                                <Link href="https://wasap.at/RJbAiR">
                                    <Button className="mt-3 flex items-center gap-3">
                                        <PiWhatsappLogoLight size={20} />
                                        WHATSAPP
                                    </Button>
                                </Link>
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
        </div>
    )
}

export default tugas