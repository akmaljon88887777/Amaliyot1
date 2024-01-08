import { DiAndroid } from "react-icons/di";
import { BsApple } from "react-icons/bs";
import React from 'react'
import Rasm from './about.png'
function FourCards() {
    return (
        <div className='flex justify-center gap-10 mx-20'>
            <div>
                <img src={Rasm} alt="" />
            </div>
            <div style={{ lineHeight: '1.2' }} className=' text-start'>
                <h4 className='color text-xl'>Download</h4><br />
                <h4 className='text-[#262B47] font-bold text-4xl'>Download The Latest Version <br /> Of Our App</h4><br />
                <p className='text-[#919294] text-base'>Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita <br /> erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod <br /> magna dolore erat amet</p>
                <div className='flex gap-6 mt-6'>
                    <button className='w-[276px] h-[80px] btnb rounded-xl flex items-center'>
                        <p className="p-4"><BsApple size={'3em'} color="white" /></p>
                        <div className="py-4 text-white">
                            <p className="capitalize text-lg">aviable on</p>
                            <p className="text-xl capitalize font-medium">App Store</p>
                        </div>
                    </button>
                    <button className='w-[276px] h-[80px] btnb rounded-xl flex items-center'>
                        <p className="p-4"><DiAndroid size={'3em'} color="white" /></p>
                        <div className="py-4 text-white">
                            <p className="capitalize text-lg">aviable on</p>
                            <p className="text-xl capitalize font-medium">Play Store</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FourCards