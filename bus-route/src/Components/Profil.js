import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
export default function Profil() {
  const auth =useAuth()
  const navigate=useNavigate()
  const handleLogout=()=>{
    auth.Logout()
    navigate('/')        
}

  return (
    <div> <h2 className='bus-head'>welcome {auth.user} <span> <Button className='col-sm-2' variant="danger" onClick={handleLogout}>
    Log Out
</Button></span> </h2></div>
  )
}
