import React, { useState } from 'react';
import '../Components/Contacts.css';
import axios from 'axios';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [msg, setMsg] = useState('');

  const contact = (e) => {
    e.preventDefault();

    axios.post('http://localhost:1516/visitors', { name, email, number, msg })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className='form-container'>
      <h1 className='bus-head'>Contact Us</h1>

      <form className='form' onSubmit={contact}>
        <div className='form-field'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='form-field'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-field'>
          <label htmlFor='mobile'>Mobile no:</label>
          <input type='number' id='mobile' value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div className='form-field'>
          <label htmlFor='message'>Message:</label>
          <textarea id='message' value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
        </div>
        <button type='submit' className='form-button'>
          Submit
        </button>
      </form>
    </div>
  );
}