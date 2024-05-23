import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import localBus from './localbus.jpg'
import pointTopoint from './pointTopointBus.jpeg'
import setc from './SETC.webp'
import '../index.css'
import { useAuth } from './Auth';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Components/Nav.css';


export default function DataInsertion() {

  return (
    <div className='adminSelectionMainDiv'>
        <h1>Add Bus Details</h1>
    <div className='adminSelectionDiv'>
      <Card style={{ width: '18rem' }} className='selectFistRoute'>
      <Card.Img className='adminSelectionDivLocal' variant="top" src={localBus} />
      <Card.Body>
        <Card.Title>Add Local Bus Details</Card.Title>
        <Button variant="primary" size='sm'><NavLink className='nav-link' to='/Admin'>Add Data</NavLink></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='selectSecondRoute'>
      <Card.Img className='adminSelectionDivpoint' variant="top" src={pointTopoint} />
      <Card.Body>
        <Card.Title>Add Point To Point Bus Details</Card.Title>
        <Button variant="primary" size='sm'><NavLink className='nav-link' to='/Admin2'>Add Data</NavLink></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='selectThirdRoute'>
      <Card.Img className='adminSelectionDivsetc' variant="top" src={setc} />
      <Card.Body>
        <Card.Title>Add SETC Bus Details</Card.Title>
        <Button variant="primary" size='sm'><NavLink className='nav-link' to='/Admin3'>Add Data</NavLink></Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}
