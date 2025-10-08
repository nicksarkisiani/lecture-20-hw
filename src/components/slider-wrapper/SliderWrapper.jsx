import Swiper from "swiper"
import { SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SliderWrapper = ({slides, slidesPerView, isPaginationVisible}) => {
  return (
    <Swiper navigation
    pagination={{ clickable: true }} 
    slidesPerView={slidesPerView}>
        {slides.map((slide, index) => {
            <SwiperSlide key={index}>{slide}</SwiperSlide>
        })}
    </Swiper>
  )
}

export default SliderWrapper