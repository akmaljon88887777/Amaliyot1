import React from 'react'

function Forms() {
  return (
    <div className='grid justify-items-center gap-5 mt-5'>
      <div className='flex gap-3'>
        <input style={{ border: '1px solid #ced4da' }} type="text" placeholder='Your Name' className='flex items-center text-start p-4 rounded-xl w-[439px] h-[58px] shadow-xl' />
        <input style={{ border: '1px solid #ced4da' }} type="text" placeholder='Your Email' className='flex items-center text-start p-4 rounded-xl w-[439px] h-[58px] shadow-xl' />
      </div>
      <div className='grid'>
        <input style={{ border: '1px solid #ced4da' }} type="text" placeholder='Subject' className='flex items-center text-start p-4 rounded-xl w-[894px] h-[58px] shadow-xl' />

      </div>
      <div className='grid'>
        <textarea style={{ border: '1px solid #ced4da' }} className='w-[894px] h-[100px] rounded-xl p-4 shadow-xl' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
      </div>
      <div>
        <button className='btnb flex justify-center items-center rounded-full w-[201px] h-[56px] text-white'>Send Message</button>
      </div><br />
    </div>
  )
}

export default Forms