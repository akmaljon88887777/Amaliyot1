import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react'
import Rasm from './screenshot-3.png'
import Rasm2 from './screenshot-4.png'
import Rasm3 from './screenshot-5.png'
import Rasm4 from './screenshot-2.png'
import Rasm5 from './screenshot-1.png'
import '../../App.css'
import { BiCheck } from "react-icons/bi";

function Banner2() {
    return (
        <div className='justify-center flex gap-52 w-full  mt-44'>
            <div className='text-start'>
                <h4 style={{ fontSize: '20px' }} className='color'>Screenshot</h4>
                <h4 style={{ lineHeight: '1.2' }} className='text-4xl font-semibold text-[#262B47]'>User Friendly interface And Very Easy To <br /> Use Fitness App</h4><br />
                <p className='text-[#919284] text-base'>Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed <br /> stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                <div className="mt-5 gap-y-10">
                    <p className="text-[#919284] flex gap-3 text-base"><BiCheck className="color" color="purple" size={27} />lorem ipsum dolor sit amet</p>
                    <p className="text-[#919284] flex gap-3 text-base"><BiCheck className="color" color="purple" size={27} />lorem ipsum dolor sit amet</p>
                    <p className="text-[#919284] flex gap-3 text-base"><BiCheck className="color" color="purple" size={27} />lorem ipsum dolor sit amet</p>
                    <button className=" w-[173px] h-[56px] rounded-full mt-8 color2 text-xl text-white font-medium">Read More</button>
                </div>
            </div>
            <div>
                <div className='imgCarousel2 text-transparent p-5 justify-center flex'>
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper overflow-hidden"
                    >
                        <SwiperSlide className='rounded-2xl'>
                            <img src={Rasm} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='rounded-2xl'>
                            <img src={Rasm2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='rounded-2xl'>
                            <img src={Rasm3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='rounded-2xl'>
                            <img src={Rasm4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='rounded-2xl'>
                            <img src={Rasm5} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Banner2