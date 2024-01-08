import React from 'react'

function ThreeCards({ icon, title, text }) {
  return (
    <div className='grid justify-items-center text-center border-none'>
      <div className='w-[383.9px] grid justify-items-center h-[208px] border bg-[#F0F6FF] rounded-xl'>
        <div className="w-[100px] h-[100px] rounded-full justify-center shadow-2xl items-center flex btnb font-black -mt-14">
          <p>{icon}</p>
        </div>
        <div className=' px-10'>
          <p className='text-xl font-semibold'>{title}</p><br />
          <p className='text-base text-[#919294] font-normal'>Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet</p>
        </div>
      </div>

    </div>
  )
}

export default ThreeCards