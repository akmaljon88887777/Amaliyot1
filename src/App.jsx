
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Carousel from "./Components/Carousel";
import FiveCards from "./Components/FiveCards";
import Banner2 from "./Components/Banner2";
import Forms from "./Components/Forms";
import Homes from "./Components/Home";
import Banner from "./Components/Banner";

import './main'

const App = () => {
  return (
    <>
      <div style={{ zIndex: '2', justifyContent: 'center', display: 'flex', gap: '10px', position: 'fixed', }} className='App navbar navbar-light justify-center flex w-full h-20 items-center text-white '>
        <div className='navbar3'>
          <h4 className='text-4xl font-bold'>FittApp</h4>
        </div>
        <div className='flex justify-center text-lg font-semibold mx-20 gap-10'>
          <Link to='/'>
            <h4 className="nav-item nav-link">Home</h4>
          </Link>
          <Link to="about">
            <h4 className="nav-item nav-link">About</h4>
          </Link>
          <Link to="feature">
            <h4 className="nav-item nav-link">Feature</h4>
          </Link>
          <Link to="pricing">
            <h4 className="nav-item nav-link">Pricing</h4>
          </Link>
          <Link to="carusel">
            <h4 className="nav-item nav-link">Review</h4>
          </Link>
          <Link to="forms">
            <h4 className="nav-item nav-link">Contact</h4>
          </Link>

        </div>

        <div className='ml-36 navbar2'>
          <button className='btnb h-[45px] w-[200px] justify-center flex items-center rounded-full text-center '>Start Free Trial</button>
        </div>
      </div><br /><br /><br /><br /><br /><br />


      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<Banner />} />
        <Route path="/feature" element={<Banner2 />} />
        <Route path="/pricing" element={<FiveCards />} />
        <Route path="/carusel" element={<Carousel />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>

    </>
  )
}

export default App
