import React from 'react'
import { BiCheck } from 'react-icons/bi'
function Monthly({ dolor, number, month, slash }) {
  return (
    <div>
         <div className='w-[407px] h-[395px] active:duration-[2s] p-4 bg-[#d6dfec] rounded-xl text-start'>
                <div style={{ borderBottom: '1px solid #979ca1' }} className='p-6 px-6'>
                    <h4 className='color text-2xl font-semibold'>Starter Plan</h4>
                    <p className='text-[#919294] text-base'>Powerful & Awesome Features</p>
                </div>
                <div className='p-6'>
                    <h1 className='text-[#262B47] text-[40px] font-extrabold flex gap-1 items-center'>
                        <small style={{ fontSize: '22px' }} className='align-top'>{dolor}</small>
                        {number}
                        <small>{slash}</small>
                        <small className='align-bottom text-base'>{month}</small>
                    </h1>
                </div>
                <div className='justify-between flex flex-col pe-5 ps-5'>
                    <div className='uppercase justify-between flex w-full text-base'>
                        <div className="text-[#919294]">Html5 & Css3</div>
                        <div><BiCheck className="color" color="purple" size={27} /></div>
                    </div>
                    <div className=' justify-between flex gap-10 text-base'>
                        <div className="text-[#919294]">Html5 & Css3</div>
                        <div><BiCheck className="color" color="purple" size={27} /></div>
                    </div>
                    <div className=' justify-between flex gap-10 text-base'>
                        <div className="text-[#919294]">Html5 & Css3</div>
                        <div><BiCheck className="color" color="purple" size={27} /></div>
                    </div>
                </div>
                <div className="justify-start flex w-full m-5">
                    <button className="w-[128px] h-[40px] rounded-full justify-center flex items-center text-white btnb">Get started</button>
                </div>
            </div>
    </div>
  )
}

export default Monthly