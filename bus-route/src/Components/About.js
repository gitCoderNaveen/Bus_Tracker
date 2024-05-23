import React from 'react';
import image1 from '../img1.jpg';
import Home from './Home.css';
import '../Components/Nav.css';
import { Col, Container, Row, Button } from 'react-bootstrap';

export default function About() {
  return (
    <div>
      <h1 className='bus-head' style={{ fontWeight: 'bold' }}>ABOUT US</h1>

      <Container style={{ marginTop: '10px' }}>
        <Row>
          <Col xs={12} md={6}>
            <h1 style={{ fontWeight: 'bold' }}> About us</h1>
            <p>
              Welcome to ROUTEBUS, your ultimate destination for local and point-to-point bus services and timings with a focus on reliability, convenience, and efficiency.
              At ROUTEBUS, we understand the importance of seamless transportation solutions in your daily life. Whether you're commuting to work, planning a day trip, or embarking on a journey, we're here to make your travel experience smooth and hassle-free.
            </p>
            <Button variant="primary" size="sm" href="#" target="_blank">
              Learn More
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <div className='d-none d-md-block'>
              <img
                className='myImage'
                src={image1}
                alt='busImage'
                style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '60px',
                  objectFit: 'cover'
                }}
              />
            </div>
            <img
              className='myImage d-md-none'
              src={image1}
              alt='busImage'
              style={{
                width: '50%',
                height: '280px',
                borderRadius: '60px',
                objectFit: 'cover'
              }}
            />
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col xs={12} md={6}>
            <div className='d-none d-md-block'>
              <img
                className='myImage'
                src={image1}
                alt='busImage'
                style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '60px',
                  objectFit: 'cover'
                }}
              />
            </div>
            <img
              className='myImage d-md-none'
              src={image1}
              alt='busImage'
              style={{
                width: '50%',
                height: '75px',
                borderRadius: '60px',
                objectFit: 'cover'
              }}
            />
          </Col>
          <Col xs={12} md={6}>
            <h1 style={{ fontWeight: 'bold' }}>Our Mission</h1>
            <p>
            Our mission is to provide comprehensive information and assistance to travelers seeking local and point-to-point bus services operated by the State Express Transport Corporation (SETC). We strive to empower travelers with accurate and up-to-date bus schedules, routes, and timings, ensuring that you can plan your journey with confidence and precision.
            </p>
            <Button variant="primary" size="sm" href="https://prakash-joyboy.netlify.app/" target="_blank">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>

      {/* <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col xs={12} md={6}> */}
            {/* <h1 style={{ fontWeight: 'bold' }}>Naveen kumar</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              malesuada, arcu ac blandit tristique, tortor nisi consequat est,
              commodo scelerisque ante orci id enim. Suspendisse imperdiet
              accumsan ligula, a rhoncus risus imperdiet sed. In et erat diam.
              Nullam elementum ac ante consequat dapibus. Nunc finibus bibendum
              ex, pulvinar pellentesque felis varius ac.
            </p>
            <Button variant="primary" size="sm" href="#" target="_blank">
              Learn More
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <div className='d-none d-md-block'>
              <img
                className='myImage'
                src={image1}
                alt='busImage'
                style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '60px',
                  objectFit: 'cover'
                }}
              />
            </div>
            <img
              className='myImage d-md-none'
              src={image1}
              alt='busImage'
              style={{
                width: '50%',
                height: '75px',
                borderRadius: '60px',
                objectFit: 'cover'
              }}
            /> */}
            <div className='aboutend'>
            <div className='offer'>
            <h1 style={{ fontWeight: 'bold',fontFamily:'cursive',textAlign:'center'}}>What we Offer</h1>
            <p style={{ fontWeight: 'bold',fontSize:'15px', rowGap:'10px' }}><ul>
              <li>Bus Schedules: Access detailed schedules for SETC buses operating in your area, including departure and arrival times for various destinations.</li>
              <li>Route Information: Discover the routes covered by SETC buses, along with important landmarks and stops along the way.</li>
              <li>User-Friendly Interface: Our user-friendly website interface makes it easy for you to search for bus services based on your preferred departure and destination locations.</li>
              <li>Real-Time Updates: Stay informed about any changes or updates to bus schedules, ensuring that you're always aware of the latest travel information.</li>
              <li>Customer Support: Have questions or need assistance? Our dedicated customer support team is here to help you with any inquiries or concerns you may have.</li>
              </ul></p>
              </div>
              <div className='why'>
                <h1 style={{ fontWeight: 'bold',fontFamily:'cursive',textAlign:'center'}}>Why Choose Us</h1>
                <p style={{ fontWeight: 'bold',fontSize:'15px', rowGap:'10px' }}><ul>
              <li>Reliability: Count on us to provide accurate and reliable information about local and point-to-point bus services, helping you plan your journey with confidence.</li>
              <li>Convenience: With our easy-to-use platform, you can quickly find the bus services you need and access essential travel information from the comfort of your home or on the go.</li>
              <li>Accessibility: We're committed to making transportation information accessible to all travelers, ensuring that everyone can benefit from our services.</li>
              <li>Commitment to Excellence: As a trusted source for bus travel information, we're dedicated to delivering excellence in everything we do, from our website functionality to our customer service.</li>
              </ul></p>
              </div>
              </div>
          {/* </Col>
        </Row>
      </Container> */}

    </div>
  )
}