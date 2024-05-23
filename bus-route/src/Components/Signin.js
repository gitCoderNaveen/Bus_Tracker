import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../index.css'
import sigup2 from '../sigup2.jpg'
import sigup3 from'../sigup3.jpg'


export default function Signin() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handlesigin =(e)=> {
    e.preventDefault()
    const fromData={
      username:name,
      email:email,
      password:password
    }

    //axios get the data from db
    axios.post(`http://localhost:4000/users/post`,fromData)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    navigate('/Login')
  }

  return (

    <div className='signinDiv'>
      <div className='signup'>
      <h1 className='bus-head'>Signup with our servers</h1>
      <form onSubmit={handlesigin} className='sigform'>
        <FloatingLabel
          controlId="floatingInput"
          label="Name"
          className="mb-2"
        >
          <Form.Control type="text" placeholder="your full name" value={name} onChange={(e) => { setName(e.target.value) }} />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-4"
        >
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </FloatingLabel><br></br>
        <Button variant="primary" type='submit'>
          Sign Up
        </Button>
      </form>

      {/* <Card className='signinCard'>
      <Card.Body className='signinBody'>
        <div className='signinGreet'>
          <h2>Sigin Page</h2>
        </div>
      <form className='signinForm' onSubmit={handlesigin}>
      <Form.Group className="mb-3">
        <Form.Label>Name: </Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email: </Form.Label>
        <Form.Control type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password: </Form.Label>
        <Form.Control type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <h4>Already have an Account?</h4>
      <Button variant="primary" onChange={handlelog}>
        Login
      </Button> */}


      {/* <label>Name:</label>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Password:</label>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit'>SignIn</button>
        
        <h2>Alreday have a Account?</h2>
        <button onClick={handlelog}>Login</button> */}

      {/* </form>

        
        </form>

        </Card.Body>
    </Card> */}
    </div>
   
    </div>
  )
}
