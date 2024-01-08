
import { useState } from 'react'
import '../../App.css'
import Monthly from './Monthly'
import Yearly from './Yearly'
function FiveCards() {
    const [demo, setDemo] = useState(true)
   
    return (
        <div className='grid text-start p-4'>
            <div className='mt-44 text-center'>
                <h4 className="color text-xl font-medium">Pricing Plan</h4><br /><br />
                <h1 className="text-4xl text-[#262B47] font-bold">Choose Your Plan</h1><br />
                <div className="flex justify-center mb-7">
                    <button onClick={() => setDemo(true)} style={{ borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px', borderTop: '2px solid #517AE8', borderLeft: '2px solid #5D65EC', borderRight: '2px solid #6D4BF1',transitionDuration:'5s', borderBottom: '2px solid #802CF8' }} className= {`justify-center  text-white flex items-center w-[118px] h-[48px]  ${demo ? 'btnb border-none': 'bg-white color'}`}>Monthly</button>
                    <button onClick={() => setDemo(false)} style={{ borderBottomRightRadius: '30px', borderTopRightRadius: '30px', borderTop: '2px solid #517AE8', borderLeft: '2px solid #5D65EC', borderRight: '2px solid #6D4BF1',transitionDuration:'5s', borderBottom: '2px solid #802CF8' }} className={`justify-center  text-white flex items-center w-[118px] h-[48px]  ${demo ? 'bg-white color': 'btnb border-none'}`}>Yearly</button>
                </div><br />
            </div>
            {demo ? <div className='flex justify-center gap-6'> <Monthly dolor={'$'} month={'month'} number={14.19} /><Monthly dolor={'$'} month={'month'} number={14.19} /><Monthly dolor={'$'} month={'month'} number={14.19} /></div> : <div className='flex justify-center gap-6'><Yearly dolor={'$'} month={'Yearly'} number={114.99} /><Yearly dolor={'$'} month={'Yearly'} number={124.99} /><Yearly dolor={'$'} month={'Yearly'} number={134.99} /></div>}
        </div>
    )
}

export default FiveCards