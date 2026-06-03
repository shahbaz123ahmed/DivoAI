import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from '../data/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <div className="py-12 bg-[#07090e]">
            <div className="container mx-auto px-6">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2.5 }
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((testimonial, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="p-6 md:p-8 glass-card rounded-2xl text-center">
                                <i className={`fas fa-quote-left text-4xl ${testimonial.iconColor} opacity-50`}></i>
                                <p className="text-gray-200 text-lg mt-4">{testimonial.text}</p>
                                <h4 className="font-bold mt-5 text-xl">{testimonial.author}</h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;