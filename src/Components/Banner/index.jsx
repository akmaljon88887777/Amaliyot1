import { MdSettingsSuggest } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";

import '../../App.css'
import CountUp from "react-countup";
function Banner() {
    const style = {
        color: 'rgba(123,36,220,1)',
    }
    return (
        <div data-aos="fade-down">
            <div className='justify-center flex text-start w-full gap-10 mt-52 mb-36 px-16'>
                <div className='grid'>
                    <h1 style={{ fontWeight: '500' }} className='color text-xl'>About app</h1>
                    <h1 style={{ fontWeight: '800', }} className='text-4xl text-[#262B47]'>#1 App For Your Fitness</h1>
                    <p className='text-base text-[#919294]'>Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita <br /> erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod <br /> magna dolore erat amet</p>
                    <div className="flex">
                        <div className='flex gap-40 items-center gap-y-5'>
                            <div className="flex items-center gap-2">
                                <div id="text0" className="color">
                                    <MdSettingsSuggest size={42} className="text" style={style} />
                                </div>
                                <div className=" text-[#262B42] font-medium text-center py-5">
                                    <div className="text-4xl font-extrabold num gap-y-32 ">
                                        <CountUp
                                            start={0}
                                            end={1234}
                                            duration={4}
                                        />
                                    </div>
                                    <div style={{ fontSize: '16px' }} className="color">
                                        Active install
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div id="text0" className="color">
                                    <IoChatbubblesSharp size={42} className="text" style={style} />
                                </div>
                                <div className=" text-[#262B42] font-medium text-center py-5">
                                    <div className="text-4xl font-extrabold num gap-y-32">
                                        <CountUp
                                            start={0}
                                            end={1234}
                                            duration={4}
                                        />
                                    </div>
                                    <div style={{ fontSize: '16px' }} className="color">
                                        Active install
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button className=" w-[173px] h-[56px] rounded-full color2 text-xl text-white font-medium">Read More</button>
                    </div>
                    <br />
                </div>
                <div className="grid justify-center text-center rasm2 w-full mb-2">

                </div>
            </div>
        </div>
    )
}

export default Banner