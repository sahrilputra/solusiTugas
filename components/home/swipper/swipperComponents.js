import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


import styles from './styles.module.scss'
import { MySwipper } from './swipper';

import {
  PiPresentationChartLight,
  PiNewspaper, PiNewspaperClipping,
  PiPencilSimpleLine, PiBookOpenLight
} from "react-icons/pi";

export const SwipperComponents = () => {
  return (
    <>

      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><MySwipper icon={<PiPresentationChartLight size={35} />} title={"PPT"} param={"Tugas Power Point"} /></SwiperSlide>
        <SwiperSlide><MySwipper icon={<PiNewspaper size={35} />} title={"Makalah"} param={"Tugas Makalah"} /></SwiperSlide>
        <SwiperSlide><MySwipper icon={<PiNewspaperClipping size={35} />} title={"Jurnal"} param={"Tugas Jurnal"} /></SwiperSlide>
        <SwiperSlide><MySwipper icon={<PiPencilSimpleLine size={35} />} title={"Essay"} param={"Tugas Essay"} /></SwiperSlide>
        <SwiperSlide><MySwipper icon={<PiBookOpenLight size={35} />} title={"Skripsi"} param={"Tugas Skripsi"} /></SwiperSlide>
      </Swiper>
    </>
  )
}
