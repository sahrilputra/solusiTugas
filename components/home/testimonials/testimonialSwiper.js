import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './styles.module.scss'
import { Testimonials } from '.';

import "swiper/css";

export const TestimoniSwipper = () => {
    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
     
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
            <SwiperSlide className={styles.slide}> <Testimonials /> </SwiperSlide>
            <SwiperSlide> <Testimonials /> </SwiperSlide>
            <SwiperSlide> <Testimonials /> </SwiperSlide>
        </Swiper>
    )
}
