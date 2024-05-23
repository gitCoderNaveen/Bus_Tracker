import React, { useEffect, useState } from 'react'
import { useAuth } from './Auth'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../index.css'

export default function Login2(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [islogged, setIslogged] = useState(false)
    const [userlist, setUserlist] = useState([])
    const [errmsg, setErrmsg] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:1516/user`)
          
            .then(res => setUserlist(res.data))
            .catch(err => console.log(err))
    }, [])
    const handlelogin = (e) => {
        e.preventDefault()
        const user = userlist.find(x => x.email === email)
        if (user) {
            if (user.password === password) {
                auth.Login(user.name)
                setIslogged(true)
                localStorage.setItem('email', email); 
                localStorage.setItem('password', password); 
                navigate('/Filter2')    

            } else {
                setErrmsg("Incorrect Password")

            }
        } else {
            setErrmsg("User not Found Please Signin")
        }
    }
    
    const handlelogout = () => {
        setIslogged(false)
        localStorage.removeItem('email'); 
        localStorage.removeItem('password'); 
    }

 const Adminlogin=()=>
    {
        navigate('/AdminLogin')
    }
    return (
        <div className='loginMainDiv '>
             <h1 className='bus-head'>Login to Access</h1>
            <form className='loginFormDiv col-lg col-sm'>
              
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-4"
                >
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                </FloatingLabel><br></br>
                {islogged?<Button variant="danger" onClick={handlelogout}>
                    Log Out
                </Button>:<Button variant="primary" onClick={handlelogin}>
                    Log In
                </Button>}  
              
                <Button className='adminBtn' variant="primary" onClick={Adminlogin}>
                    Admin Login
                </Button>
                {errmsg}
            </form>
        </div>
    )
}
