import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


import styles from './styles.module.scss'
import { MySwipper } from './swipper';

import { PiPresentationChartLight } from "react-icons/pi";

export const SwipperComponents = () => {
  return (
    <>
    
      <Swiper
        spaceBetween={160}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1025: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}

        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><MySwipper icon={<PiPresentationChartLight size={35} />} title={"PPT"} param={"Tugas Power Point"} /></SwiperSlide>
        <SwiperSlide><MySwipper icon={<PiPresentationChartLight size={35} />} title={"PPT"} param={"Tugas Power Point"} /></SwiperSlide>
        <SwiperSlide><MySwipper icon={<PiPresentationChartLight size={35} />} title={"PPT"} param={"Tugas Power Point"} /></SwiperSlide>
        <SwiperSlide><MySwipper icon={<PiPresentationChartLight size={35} />} title={"PPT"} param={"Tugas Power Point"} /></SwiperSlide>
      </Swiper>
    </>
  )
}
