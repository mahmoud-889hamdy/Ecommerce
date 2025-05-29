import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Banner1 from './img/banner_Hero1.jpg';
import Banner2 from './img/banner_Hero2.jpg';
import Banner3 from './img/banner_Hero3.jpg';

function HeroSlider() {
    return (
        <>

            <div className="hero">
                <div className="container">
                    <Swiper loop={true} autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Microsoft Xbox <br />    360 Controller</h3>
                                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>
                            <img src={Banner1} alt="slider hero 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Microsoft Xbox <br />    360 Controller</h3>
                                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>
                            <img src={Banner2} alt="slider hero 2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Microsoft Xbox <br />    360 Controller</h3>
                                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>
                            <img src={Banner3} alt="slider hero 3" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </>
    );
}

export default HeroSlider
