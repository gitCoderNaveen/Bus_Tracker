import React, { useState } from 'react'
import Driver from '../Components/Images/driver.webp'
import Conductor from '../Components/Images/Conductor.webp'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export default function Track() {
    const [dname, setdName] = useState('')
    const [cname, setcName] = useState('')
    const [contacno, setContactno] = useState()

    const dataHandle=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:1516/driverData',{dname, cname,contacno})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }



    return (
        <div>
            <Form onSubmit={dataHandle}>
            <FloatingLabel controlId="floatingInput"  label="Driver Name" className="mb-3">
                <Form.Control type="text" onChange={(e)=>setdName(e.target.value)} placeholder='EnterName'/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Conductor Name" className="mb-3">
                <Form.Control type="text" placeholder='Enter Name' value={cname} onChange={(e)=>setcName(e.target.value)} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Contact Number" className="mb-3">
                <Form.Control type="text" placeholder='Enter Name' value={contacno} onChange={(e)=>setContactno(e.target.value)} />
            </FloatingLabel>
            <Button variant="primary">Submit</Button>
            </Form>
        </div>
    )
}