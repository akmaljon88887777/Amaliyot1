import '../../App.css'
import { BiCheck } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";
import { FaRegEye, FaShieldAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { BiLayer } from "react-icons/bi";
import Header from '../Header'
import Banner from '../Banner'
import Cards from '../Cards'
import Banner2 from "../Banner2";
import ThreeCards from "../ThreeCards";
import FourCards from "../FourCards";
import FiveCards from "../FiveCards";
import Cardtext from '../Cards/cardtext'
import Carousels from "../Carousel";
import Forms from "../Forms";
import Footer from "../Footer";
import FormText from "../Forms/formtext";
import React from 'react'
import Carouseltext from "../Carousel/carouseltext";
import FiveCardText from "../FiveCards/FiveCard";
import Threecardtext from "../ThreeCards/threecardtext";
import Rasm from './bg-top.png'

function Homes() {
    return (
        <div className='flex justify-center '>
            <div style={{ zIndex: '1' }} className='text-center items-center w-[1400px] h-[7000px]  bg-white justify-items-center mx-[0px] p-10 -mt-10'>
                <div style={{ zIndex: '-1' }} className='grid justify-items-center '>
                    <Header />
                </div>
                <div style={{ zIndex: '-1' }} className='App justify-center flex w-full items-start custom-shape-divider-bottom-1703993272'>
                    <div style={{ zIndex: '1' }} className='w-[1400px] h-[100vh] flex justify-center bg rang'>
                        <img className='h-[300px] w-[1335px] -scale-x-105' src={Rasm} alt="" />

                    </div>
                </div>
                <div className='drid justify-items-center'>
                    <Banner />
                    <Cardtext />
                    <div className='grid grid-cols-3 justify-items-center pe-20 ps-20 mb-10 gap-y-6'>
                        <Cards title='High Resolution' icon={<FaRegEye color="white" size={30} />} />
                        <Cards title='Retina Ready' icon={<BiLayer color="white" size={30} />} />
                        <Cards title='Editable Data' icon={<FaRegEdit color="white" size={30} />} />
                        <Cards title='Fully Secured' icon={<FaShieldAlt color="white" size={30} />} />
                        <Cards title='Cloud Storage' icon={<AiFillCloud color="white" size={30} />} />
                        <Cards title='Fully Responsive' icon={<BsFillPhoneFill color="white" size={30} />} />
                    </div>
                    <div className='flex justify-center '>
                        <Banner2 />
                    </div>
                    <Threecardtext /><br />
                    <div className="flex gap-6 justify-center mx-10 mt-16 font-black mb-40">
                        <ThreeCards icon={<AiFillSetting size={50} color="white" />} title='Install the App' />
                        <ThreeCards icon={<FaAddressCard size={50} color="white" />} title='Set Up Your Profile' />
                        <ThreeCards icon={<BiCheck size={50} color="white" />} title='Enjoy The Profiles' />
                    </div><br />
                    <div className="justify-items-center grid ">
                        <FourCards />
                        <FiveCardText /><br />
                        <div className="justify-center flex w-full">
                            <FiveCards dolor='$' number='14.99' month='Month' slash='/' />


                        </div>
                    </div><br /><br />
                    <Carouseltext /><br /><br />
                    <Carousels /><br /><br />
                    <FormText />
                    <Forms />
                    <div className="flex justify-center w-full">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homes