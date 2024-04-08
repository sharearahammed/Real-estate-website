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
        <SwiperSlide className='rounded-lg bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://i.ibb.co/SNhWfHp/Residential-1.jpg")',
     }}><div className='w-[900px]'>
     <h1 className='mb-4 text-4xl text-white text-center font-bold'>Welcome Home to Comfort & Style! <br /> Explore Our Premier Residential Living Experience Today.</h1>
     <p className='mb-3 text-white'>Welcome to a residential oasis where comfort meets sophistication. Our community offers the perfect balance between modern convenience and serene living. Explore our inviting spaces, designed to make every moment feel like home. Embrace the lifestyle you deserve, where relaxation and luxury intertwine seamlessly. Welcome to your new haven.</p>
     <button className='btn border-[#BC986B] text-white bg-[#BC986B]'>VIEW ALL PROPERTIES</button>
         </div></SwiperSlide>


        <SwiperSlide className='rounded-lg' style={{ backgroundImage: 'url("https://i.ibb.co/LRgTpqv/Residential-2.jpg")' }}><div className='w-[900px]'>
        <h1 className='mb-4 text-4xl text-white text-center font-bold'>Welcome Home to Comfort & Style! <br /> Explore Our Premier Residential Living Experience Today.</h1>
        <p className='mb-3 text-white'>Welcome to a residential oasis where comfort meets sophistication. Our community offers the perfect balance between modern convenience and serene living. Explore our inviting spaces, designed to make every moment feel like home. Embrace the lifestyle you deserve, where relaxation and luxury intertwine seamlessly. Welcome to your new haven.</p>
        <button className='btn text-white border-[#BC986B] bg-[#BC986B]'>VIEW ALL PROPERTIES</button>
            </div></SwiperSlide>


        <SwiperSlide className='rounded-lg bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://i.ibb.co/Msk79P3/Residential-3.jpg")' }}><div className='w-[900px]'>
        <h1 className='mb-4 text-4xl text-white text-center font-bold'>Welcome Home to Comfort & Style! <br /> Explore Our Premier Residential Living Experience Today.</h1>
        <p className='mb-3 text-white'>Welcome to a residential oasis where comfort meets sophistication. Our community offers the perfect balance between modern convenience and serene living. Explore our inviting spaces, designed to make every moment feel like home. Embrace the lifestyle you deserve, where relaxation and luxury intertwine seamlessly. Welcome to your new haven.</p>
        <button className='btn border-[#BC986B] text-white bg-[#BC986B]'>VIEW ALL PROPERTIES</button>
            </div></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;