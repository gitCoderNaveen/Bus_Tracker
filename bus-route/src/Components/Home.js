import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from '../img1.jpg';
import image2 from '../img2.jpg';
import image3 from '../img3.webp';
import image6 from '../img6.jpg'
import '../index.css'
import '../Components/Home.css'


// import { Link, Outlet, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
// import Login from './Login'
export default function Home(props) {
  const auth= useAuth()
  const navigate = useNavigate()
  const navigate2= useNavigate()

  const handleClick = (props) => {
    if (auth.user) {
        navigate('/Filter');
    } else {
        navigate('/Login');
    }
};
const handleClick2 = (props) => {
console.log("click");
  if (auth.user) {
      navigate2('/Filter2');
     
  } else {
      navigate2('/Login2');
  }
};

const handleClick3 = (props) => {

  if (auth.user) {
      navigate('/Filter3');
  } else {
      navigate('/Login');
  }
};
  return (
    <div>
      <h1 className='bus-head fade-in'>Route Bus City Transport Portal</h1>
      {/*=================================== Image-card row start===================================== */}
      <div className='buscard'>
        <div class="row col-lg-12">
          <div class="col-sm-3 mb-3 mb-sm-0 cardDiv">
            <div class="card fade-in delay-1">
              <img className='myImage' src={image6} alt='busImage' />
              <div class="card-body">
                <h5 class="card-title">Local Buses</h5>
                <p class="card-text"></p>
                <button className='baa-baa' onClick={handleClick}>Go somewhere</button>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card fade-in delay-2">
              <img className='myImage' src={image6} alt='busImage' />
              <div class="card-body">
                <h5 class="card-title">Point to Point Buses</h5>
                <p class="card-text"></p>
                <button className='baa-baa' onClick={handleClick2}>Go somewhere</button>
              </div>
              
            </div>
           
          </div>
          <div class="col-sm-3">
            <div class="card fade-in delay-3">
              <img className='myImage' src={image6} alt='busImage' />
              <div class="card-body">
                <h5 class="card-title">SETC Buses</h5>
                <p class="card-text"></p>
                <button className='baa-baa' onClick={handleClick3}>Go somewhere</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=================================== Image card row End===================================== */}

      {/*======================================== Banner content start==============================*/}
      <div class='banner-container '>
        <div className='bus-para fade-in delay-4'>
          <p>
            Welcome to Route Bus City Transport Portal, your comprehensive platform for all things related to city transportation via bus routes. Our portal aims to provide you with seamless access to information about bus routes, schedules, fares, and much more to enhance your urban commuting experience.
          </p>
          <p>
            Whether you're a daily commuter, a tourist exploring the city, or someone seeking alternative transportation options, our portal is designed to cater to your needs. With a user-friendly interface and up-to-date information, navigating through the city's bus network has never been easier.
          </p>
          <p>
            Discover detailed route maps covering all major city destinations, including popular tourist attractions, business districts, and residential areas. Plan your journey in advance by accessing real-time schedules for each bus route, ensuring you reach your destination on time.
          </p>
          <p>
            Our platform also provides valuable information on fares, ticketing options, and payment methods, making it convenient for you to pay for your ride. Stay informed about any service updates, route changes, or special announcements through our notification system, ensuring a smooth and hassle-free commuting experience.
          </p>
          <p>
            Route Bus City Transport Portal is committed to enhancing the overall commuting experience for residents and visitors alike. Join us on this journey towards a more connected and accessible city transportation system. Let's make every bus ride a convenient and enjoyable experience for everyone. Welcome aboard!
          </p>
        </div>
      </div>
      {/*======================================== Banner content End==============================*/}
    </div>
  )
}


