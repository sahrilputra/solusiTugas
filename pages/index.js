import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Button } from "@material-tailwind/react";
import { Nav } from '../components/headers/Nav';
import { SwipperComponents } from '../components/home/swipper/swipperComponents';
import { CardItems } from '../components/home/card';
import { AiFillLock } from "react-icons/ai";
import { MdOutlineLockPerson } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiSupersonicArrow } from "react-icons/gi"
import { PiArrowUpRight, PiStudent, PiNotePencil, PiInstagramLogo, PiWhatsappLogoLight, PiWhatsappLogo, PiFacebookLogo } from 'react-icons/pi';
import { OrderTimeline } from '../components/home/timeline';
import { AiOutlineFieldTime, AiOutlineTrophy, AiOutlineStar } from 'react-icons/ai';
import { motion } from "framer-motion"
import { Accordian } from '../components/home/accordian';
import { Testimonials } from '../components/home/testimonials';
import { TestimoniSwipper } from '../components/home/testimonials/testimonialSwiper';
import { Slide, Fade } from "react-awesome-reveal";
import { BlogCard } from '../components/home/blogCard';
import { Footers } from '../components/footers';

export default function Home() {
  return (
    <>
      {/* <Nav /> */}

      <div className={`${styles.hero}`}>
        <div className={styles.hero__container}>
          <div className={`${styles.hero__left} `}>
            <img
              className={styles.hero__left__logo}
              src="../../logo.png" alt="logo img" />
            <h1 className=' text-4xl text-light-blue-800 font-bold'>Solusi Tugasku</h1>
            <p className='animate__animated animate__fadeIn'>Solusi Tugasku adalah Jasa Pengerjaan Tugas Kuliah Bidang Fakultas Ekonomi & Bisnis dengan memprioritaskan Kualitas Jawaban, Ketepatan Waktu & Kepuasan Nilai.</p>
          </div>
          <div className={styles.hero__right}>
            <img
              className={styles.hero__right__img}
              src="../../figure/hero.png" alt="hero image" />
          </div>
        </div>

        <div className={styles.services}>
          <div className={styles.services__container}>
            <Fade cascade>
              <CardItems icon={<MdOutlineLockPerson size={30} />} title={"Privasi Terjaga"} secTitle={"Kami Menjamin Privasi Anda"} param={"Solusi Tugasku Berkomitmen menjaga privasi & data customer."} />
              <CardItems icon={<PiNotePencil size={30} />} title={"100% Bebas Revisi"} secTitle={"Bebas Revisi Berkali - Kali"} param={"Kesempatan revisi tugas berkali kali, sesuai dengan kebutuhan tugas."} />
              <CardItems icon={<PiStudent size={30} />} title={"Team Ahli"} secTitle={"Temui Team Kami Yang Ahli"} param={"Team Ahli yang siap membantu dan menghadirkan solusi terbaik untuk setiap tugas yang Anda miliki."} />
            </Fade>
          </div>
        </div>

        <br className={styles.break} />

        <div className={styles.information}>
          <div className={styles.information__container}>
            <div className={styles.information__container__block}>
              <h1>Kami Menerima Berbagai Jenis Tugas Pilihan</h1>
              <p className='text-sm font-light'>Layanan Tugas yang kami terima
                Tugas Individi | Tugas Kelompok Tugas Akhir (Skripsi) | Quiz & Ujian Tugas Laporan Magang | Project</p>
            </div>
            <div className={styles.information__container__swipper}>
              <SwipperComponents />
            </div>
          </div>
        </div>

        <br className={styles.break} />

        <div className={styles.order}>
          <div className={styles.order__container}>
            <div className="site-heading">
              <h4>CARA ORDER</h4>
              <h2 className=' text-3xl'>Cara Melakukan Order</h2>
              <div className="devider" />
            </div>
            <div className={styles.order__timeline}>
              <OrderTimeline />
            </div>
          </div>
        </div>

        <div className={styles.about}>
          <div className={styles.about__shape}>
            <GiSupersonicArrow size={30} />
            <div className={styles.about__shape__text}>
              <h3 className='text-md font-bold'>99%</h3>
              <p className=' text-sm'>Tugas Selesai</p>
            </div>

          </div>
          <div className={styles.about__container}>
            <div className={styles.about__container__left}>
              <div className="site-heading">
                <h4>SOLUSI TUGASKU</h4>
                <h2 className=' text-3xl text-white'>Tentang Kami</h2>
                <div className="devider" />
                <p>Kami adalah penyedia jasa pengerjaan tugas kuliah di bidang Fakultas Ekonomi & Bisnis.
                  Kami fokus pada kualitas jawaban yang unggul, ketepatan waktu, dan kepuasan nilai untuk
                  setiap tugas yang kami tangani.</p>

                <p>Kami Memberikan Kualitas Terbaik : </p>

                <div className={styles.about__container__card}>
                  <div className={styles.about__container__item}>
                    <AiOutlineFieldTime size={30} />
                    <h3>Proses Cepat</h3>
                    <p>Kami memastikan proses pengerjaan tugas berjalan dengan cepat dan efisien. Dengan pendekatan yang terstruktur dan tim yang terampil.</p>
                  </div>
                  <div className={styles.about__container__item}>
                    <AiOutlineTrophy size={30} />
                    <h3>Kulaitas Unggul</h3>
                    <p>Kami menjamin kualitas yang unggul dalam setiap tugas yang kami kerjakan. Dengan dedikasi dan keahlian tim kami</p>
                  </div>
                  <div className={styles.about__container__item}>
                    <AiOutlineStar size={30} />
                    <h3>Kepuasan Nilai</h3>
                    <p>Kepuasan nilai Anda adalah prioritas utama bagi kami. Kami berusaha keras untuk memberikan jawaban yang memenuhi standar yang diharapkan.</p>
                  </div>
                </div>
              </div>
              <Button>
                Konsultasi Sekarang
              </Button>
            </div>
            <div className={styles.about__container__right}>
              <img src="../../figure/target.png" alt="" />
            </div>
          </div>
        </div>


        <div className={styles.faq}>
          <div className={`${styles.faq__container} text-center`}>
            <div className="site-heading">
              <h4>FAQ</h4>
              <h2 className=' text-3xl'>Yang Sering Orang Tanyakan</h2>
              <div className="devider" />
              <div className={styles.faq__container__accordian}>
                < Accordian />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.testi}>
          <div className={styles.testi__container}>
            <div className={styles.testi__container__left}>
              <TestimoniSwipper className={styles.testi__swiper} />
            </div>

            <div className={styles.testi__container__right}>
              <div className="site-heading">
                <h4>Testimonials</h4>
                <h2 className=' text-3xl'>Kata Orang Tentang Kami</h2>
                <div className="devider" />
                <p>Kami bangga dengan feedback yang kami terima dari pelanggan kami.
                  Lihat apa yang mereka katakan tentang pengalaman mereka menggunakan
                  jasa joki tugas kami!
                </p>
                <Button className="mt-3 flex items-center gap-3">
                  <PiArrowUpRight />
                  Lihat Lainya
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.testi__blog}>
            <div className="site-heading">
              <h4>BLOG</h4>
              <h2 className=' text-3xl capitalize'>Lihat Tulisan Kami</h2>
              <div className="devider" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium tenetur vero.</p>
            </div>

            <div className={styles.testi__blog__container}>
              <BlogCard />
              <BlogCard />
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
      </div>

      {/* <Footers /> */}
    </>
  )
}
