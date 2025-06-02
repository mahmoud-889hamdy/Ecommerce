import Product from './Product'
import './SlideProduct.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

function SlideProduct({ data, title }) {
    return (
        <div className='slide_products slide'>
            <div className="container">
                <div className="top_slide">
                    <h2>{title}</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, incidunt.</p>
                </div>

                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        0: {
                            slidesPerView: 1.5,
                            spaceBetween: 10,
                        },
                    }}
                >
                    {data.map((item) => {
                        return (
                            <SwiperSlide key={item.id}><Product item={item} /></SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default SlideProduct