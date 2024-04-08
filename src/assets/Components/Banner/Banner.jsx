import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='h-[700px] rounded-lg'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-lg mySwiper"
      >
        <SwiperSlide className='rounded-lg p-7 bg-no-repeat lg:bg-cover' style={{ backgroundImage: 'url("https://i.ibb.co/SNhWfHp/Residential-1.jpg")',
     }}>Slide 1</SwiperSlide>
        <SwiperSlide className='rounded-lg' style={{ backgroundImage: 'url("https://i.ibb.co/LRgTpqv/Residential-2.jpg")' }}>Slide 2</SwiperSlide>
        <SwiperSlide className='rounded-lg bg-no-repeat lg:bg-cover' style={{ backgroundImage: 'url("https://i.ibb.co/Msk79P3/Residential-3.jpg")' }}>Slide 3</SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;