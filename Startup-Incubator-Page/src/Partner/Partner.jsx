import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import  { Navigation, Pagination, Scrollbar, A11y , Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slides from './slides.json';
import './Partner.css';


import SwiperCore from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default function Partner() {
    return (
        <div className="text-center mt-8 container2">
            <h1 className="text-5xl text-[#DFA440] mb-4">Our Partners</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                className="slider2"
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={true}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={slide} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
