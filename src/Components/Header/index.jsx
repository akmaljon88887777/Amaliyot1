
// Import Swiper React components
import '../../App.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rasm from './screenshot-3.png'
import Rasm2 from './screenshot-4.png'
import Rasm3 from './screenshot-5.png'
import Rasm4 from './screenshot-2.png'
import Rasm5 from './screenshot-1.png'

export default function Header() {
    return (
        <div style={{ justifyContent: "space-between" ,zIndex:'999 !important'}} className='flex text-white text-start mt-44 mr-24 gap-40 '>
            <div className='w-full ml-24'>
                <h4 style={{ lineHeight: '1.2' }} className='font-bold text-4xl'>
                    The Revolutionary App That Helps To <br /> Control Your Own Fitness
                </h4>
                <p className='mt-7 text-base font-medium'>Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna <br /> dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
                <div className=' flex gap-5 mt-10'>
                    <button className='w-[173px] h-[56px] btn1 rounded-full'>Read More</button>
                    <button className='w-[173px] h-[56px] btn2 rounded-full'>Contact Us</button>
                </div>
            </div>

            <div className='imgCarousel2 text-transparent p-4 justify-center flex'>
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper overflow-hidden "
                >
                    <SwiperSlide className='rounded-3xl'>
                        <img style={{}} src={Rasm} className='rounded-3xl' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-3xl'>
                        <img style={{}} src={Rasm2} className='rounded-3xl' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-3xl'>
                        <img style={{}} src={Rasm3} className='rounded-3xl' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-3xl'>
                        <img style={{}} src={Rasm4} className='rounded-3xl' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-3xl'>
                        <img style={{}} src={Rasm5} className='rounded-3xl' alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
