import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../Components/Nav.css';

export default function Admin3() {
    const[busno, setNumber]=useState('')
    const [time, setTime]=useState('')
    const [from, setFrom]=useState('select start point')
    const [to, setTo]=useState('select end point')


    const storeData=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:1516/admin3',{busno, time, from, to})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))

        setNumber('')
        setTime('')
        setFrom('select start point')
        setTo('select end point')
    }

  return (
    <div>
      <div className='adminMainDiv'>
                <div className='adminSubDiv'>
                    <div className='adminMessage col-lg-12 col-sm-12'>
                        <h2>Welcome <br/> Admin</h2>
                    </div>
                    <Form onSubmit={storeData} className='adminForm col-sm-12 col-lg-12'>
                        <h2>Admin Data</h2>
                        <Form.Group className="mb-3">
                            <Form.Label>Bus Number: </Form.Label>
                            <Form.Control type="text" value={busno} onChange={(e) => setNumber(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Bus Time: </Form.Label>
                            <Form.Control type="text" value={time} onChange={(e) => setTime(e.target.value)} />
                        </Form.Group>
                        <Form.Label>From: </Form.Label>
                        <Form.Select value={from} onChange={(e) => (setFrom(e.target.value))} aria-label="Default select example">
                            <option>Select Location</option>
                            <option value='TamilNadu'>TamilNadu</option>
                            <option value='Kerala'>Kerala</option>
                            <option value='Karnataka'>Karnataka</option>
                            <option value='Andhra'>Andhra</option>
                            <option value='Mumbai'>Mumbai</option>
                        </Form.Select>
                        <Form.Label>To </Form.Label>
                        <Form.Select value={to} onChange={(e) => (setTo(e.target.value))} aria-label="Default select example">
                            <option>Select Location</option>
                            <option value='TamilNadu'>TamilNadu</option>
                            <option value='Kerala'>Kerala</option>
                            <option value='Karnataka'>Karnataka</option>
                            <option value='Andhra'>Andhra</option>
                            <option value='Mumbai'>Mumbai</option>
                        </Form.Select><br></br>
                        <Button variant="primary" type="submit" className='admin-btn'>
                            Submit
                        </Button>
                    </Form>
                    </div>
        </div>
    </div>
  )
}
