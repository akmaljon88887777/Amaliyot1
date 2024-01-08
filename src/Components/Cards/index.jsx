import React from 'react'
import '../../App.css'
function Cards({ title, icon }) {
    return (
        <div className='w-full flex justify-start text-start g-4 pr-10 '>
            <div className='w-[400px] h-[244px] grid bg-[#F0F6FF] rounded-xl hover:shadow-xl hover:rounded-xl hover:-mt-4 duration-[0.8s]'>
                <div className="w-[60px] h-[60px] flex justify-center items-center btnb m-[24px] rounded-full ml-10">
                    {icon}
                </div>
                <div className="-mt-10 ml-10 pr-5">
                    <p className="text-[#262B47] text-xl font-semibold">{title}</p><br />
                    <p className="text-[#919284] text-base">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;