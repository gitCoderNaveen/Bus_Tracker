import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../index.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export default function AdminLogin(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userlist, setUserlist] = useState([])
    const [errmsg, setErrmsg] = useState('')
    const navigate = useNavigate()
    const adminAuth = useAuth()


    // useEffect(() => {
    //     axios.get('http://localhost:1516/adminlogin')
    //         .then(res => setUserlist(res.data))
    //         .catch(err => console.log(err))
    // }, [])

    const handlelogin = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:4000/admin/get/${email}`)
        .then(res=>{
            if(res.data[0]?.email){
                if(res.data[0]?.password===password)
                    {
                        adminAuth.Login(res.data[0]?.username) 
                        setErrmsg('')
                    alert("Log in Succesfully")
                    navigate('/DataInsertion')
                    }
                    else{
                        setErrmsg("Incorrect Password")
                    }
                }else{
                    setErrmsg("Email not Found")
                }
        })
        .catch(err => console.log(err));
    }

    


    return (
        // <div>
        //     <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter the mail'/>
        //     <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter the password'/>
        //     {/* <button onClick={handlelogin}>Admin Login</button>
        //     <button onClick={userlogin}>User Admin</button> */}
        //     <Button className='col-sm-2' variant="success" onClick={handlelogin}>
        //             Log In
        //         </Button>
        //     <Button className='col-sm-2' variant="danger" onClick={userlogin}>
        //             Log out
        //         </Button>

        //     {errmsg}
        // </div>  
        <div className='adminPageDiv'>
            <h2 className='bus-head'>Admin login</h2>
            <Form className='adminForm'>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-4">
                    <Form.Control size='sm' type="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control size='sm' type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </FloatingLabel>
                {/* <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group> */}
                <Button className='col-sm-4 adminLoginBtn1' variant="success" onClick={handlelogin}>
                    Log In
                </Button>
            </Form>
            {errmsg}
        </div>

    )
}
