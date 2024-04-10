import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import './Partner.css';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default function Partner() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.nextedge.health/api/v1/incubator/partner');
        const data = await response.json();
        console.log(data);

        if (data || Array.isArray(data)) {
          const slidesData = data.map(item => ({
            link: item.link,
            description: item.description,
          }));

          setSlides(slidesData);
          console.log(slidesData);
        } else {
          console.error('Expected an array in the API response');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center mt-8 container2">
      <h1 className="text-5xl text-[#DFA440] mb-4">Our Partners</h1>
      <Swiper
        className="slider2"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.link} alt={slide.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}