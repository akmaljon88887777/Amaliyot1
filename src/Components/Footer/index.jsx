import { FaTelegramPlane } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import { GrLinkedinOption } from "react-icons/gr";

import { AiFillInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import React from 'react'
import Rasm from './bg-top.png'

function Footer() {
  return (
    <div style={{width:'92%'}} className='w-full absolute h-[546px] flex justify-center mt-44 p-0 mx-0 overflow-x-hidden'>
      <div className='btnb w-full '>

        <img className="w-full h-[300px]" src={Rasm} alt="" />
        <div className=' flex justify-center text-start w-full gap-36 text-white'>
          <div className='grid gap-5'>
            <div className='text-2xl font-semibold text start'>Address</div>
            <div className='text-base flex gap-2 items-center'><GoLocation />123 Street, New York, Usa</div>
            <div className='text-base flex gap-2 items-center'><BsFillTelephoneFill />+012 345 67890</div>
            <div className='text-base flex gap-2 items-center'><MdEmail />info@example.com</div>
            <div className='text-base flex gap-2 items-center'>
              <div style={{ border: '1px solid white' }} className="w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-white hover:text-[#3576b6] hover:cursor-pointer"><AiOutlineTwitter /></div>
              <div style={{ border: '1px solid white' }} className="w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-white hover:text-[#3576b6] hover:cursor-pointer"><CgFacebook /></div>
              <div style={{ border: '1px solid white' }} className="w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-white hover:text-[#3576b6] hover:cursor-pointer"><AiFillInstagram /></div>
              <div style={{ border: '1px solid white' }} className="w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-white hover:text-[#3576b6] hover:cursor-pointer"><GrLinkedinOption /></div>
            </div>
          </div>
          <div className='grid gap-4'>
            <div className='text-2xl font-semibold text start'>Quick Link</div>
            <div className='text-base flex gap-2 items-center'><IoIosArrowForward />About Us</div>
            <div className='text-base flex gap-2 items-center'><IoIosArrowForward />Contact Us</div>
            <div className='text-base flex gap-2 items-center'><IoIosArrowForward />Privacy Policy</div>
            <div className='text-base flex gap-2 items-center'><IoIosArrowForward />Terms & Condition</div>
            <div className='text-base flex gap-2 items-center'><IoIosArrowForward />Career</div>
          </div>
          <div className='grid gap-4'>
            <div className='text-2xl font-semibold text start'>Popular Link</div>
            <div className='text-base flex gap-2 items-center'><IoIosArrowForward />About Us</div>
            <div className='text-base flex gap-2 items-center'><IoIosArrowForward />Contact Us</div>
            <div className='text-base flex gap-2 items-center'><IoIosArrowForward />Privacy Policy</div>
            <div className='text-base flex gap-2 items-center'><IoIosArrowForward />Terms & Condition</div>
            <div className='text-base flex gap-2 items-center'><IoIosArrowForward />Career</div>
          </div>
          <div className='grid gap-5'>
            <div className='text-2xl font-semibold text start'>News Letter</div>
            <div className='text-base flex gap-2 items-center'>Lorem ipsum dolor sit amet elit. <br /> Phasellus nec pretium mi. Curabitur <br /> facilisis ornare velit non vulpu</div>
            <div class=" w-100 mt-3 flex items-center">
              <input class="form-control border-0 rounded-pill w-[264px] ps-4 pe-5 rounded-full" type="text" placeholder="Your Email" style={{ height: "48px", }} />
              <button style={{ zIndex: '1' }} type="button" class="btn shadow-none position-absolute top-0 end-0 -mt-1 -ml-10"><FaTelegramPlane size={28} color="purple" /></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer