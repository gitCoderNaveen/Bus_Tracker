import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default function AdminTable() {

    const [localBus, setLocalBus]=useState(false)
    const [ptopBus, setPtopBus]=useState(false)
    const [setcBus, setSetcBus]=useState(false)


    const [admin, setAdmin] = useState([]);
    const [popup, setPopup] = useState(false);
    const [id, setId] = useState();
    const [busno, setBusno] = useState();
    const [time, setTime] = useState();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();

    const [admin1, setAdmin1] = useState([]);
    const [popup1, setPopup1] = useState(false);
    const [id1, setId1] = useState();
    const [busno1, setBusno1] = useState();
    const [time1, setTime1] = useState();
    const [from1, setFrom1] = useState();
    const [to1, setTo1] = useState();

    const [admin2, setAdmin2] = useState([]);
    const [popup2, setPopup2] = useState(false);
    const [id2, setId2] = useState();
    const [busno2, setBusno2] = useState();
    const [time2, setTime2] = useState();
    const [from2, setFrom2] = useState();
    const [to2, setTo2] = useState();

    useEffect(() => {
        fetchAdminData();
        fetchAdmin1Data();
        fetchAdmin2Data();
    }, []);

    const fetchAdminData = () => {
        axios.get('http://localhost:1516/admin')
            .then(response => {
                setAdmin(response.data);
            })
            .catch(error => {
                console.log('Error fetching admin data:', error);
            });
    };

    const fetchAdmin1Data = () => {
        axios.get('http://localhost:1516/admin2')
            .then(response => {
                setAdmin1(response.data);
            })
            .catch(error => {
                console.log('Error fetching admin data:', error);
            });
    };

    const fetchAdmin2Data = () => {
        axios.get('http://localhost:1516/admin3')
            .then(response => {
                setAdmin2(response.data);
            })
            .catch(error => {
                console.log('Error fetching admin data:', error);
            });
    };


    const openPopup = (data) => {
        setPopup(true);
        setId(data.id);
        setBusno(data.busno);
        setTime(data.time);
        setFrom(data.from);
        setTo(data.to);
    };

    const openPopup1 = (data) => {
        setPopup1(true);
        setId1(data.id);
        setBusno1(data.busno);
        setTime1(data.time);
        setFrom1(data.from);
        setTo1(data.to);
    };

    const openPopup2 = (data) => {
        setPopup2(true);
        setId2(data.id);
        setBusno2(data.busno);
        setTime2(data.time);
        setFrom2(data.from);
        setTo2(data.to);
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:1516/admin/${id}`, {
            busno: busno,
            time: time,
            from: from,
            to: to
        })
            .then(res => {
                console.log(res.data);
                fetchAdminData(); // Refresh admin data after update
                setPopup(false); // Close popup after update
            })
            .catch(error => {
                console.log('Error updating admin data:', error);
            });
    };

    const handleUpdate1 = () => {
        axios.put(`http://localhost:1516/admin2/${id1}`, {
            busno: busno1,
            time: time1,
            from: from1,
            to: to1
        })
            .then(res => {
                console.log(res.data);
                fetchAdmin1Data(); // Refresh admin data after update
                setPopup1(false); // Close popup after update
            })
            .catch(error => {
                console.log('Error updating admin data:', error);
            });
    };

    const handleUpdate2 = () => {
        axios.put(`http://localhost:1516/admin3/${id2}`, {
            busno: busno2,
            time: time2,
            from: from2,
            to: to2
        })
            .then(res => {
                console.log(res.data);
                fetchAdmin2Data(); 
                setPopup2(false);
            })
            .catch(error => {
                console.log('Error updating admin data:', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:1516/admin/${id}`)
            .then(response => {
                fetchAdminData(); // Refresh admin data after deletion
            })
            .catch(error => {
                console.log('Error deleting admin data:', error);
            });
    };

    const handleDelete1 = (id1) => {
        axios.delete(`http://localhost:1516/admin2/${id1}`)
            .then(response => {
                fetchAdmin1Data(); // Refresh admin data after deletion
            })
            .catch(error => {
                console.log('Error deleting admin data:', error);
            });
    };

    const handleDelete2 = (id2) => {
        axios.delete(`http://localhost:1516/admin3/${id2}`)
            .then(response => {
                fetchAdmin2Data(); // Refresh admin data after deletion
            })
            .catch(error => {
                console.log('Error deleting admin data:', error);
            });
    };

    return (
        <div>
            <div className='admintableBtnDiv'>
                <Button variant="success" size='lg' onClick={()=>setLocalBus(true)}>Local Bus</Button>
                {localBus&& <Button variant='danger' size='lg' onClick={()=>{setLocalBus(false)}}>Close</Button>}
                <Button variant="success" size='lg' onClick={()=>setPtopBus(true)}>P to P Bus</Button>
                {ptopBus&& <Button variant='danger' size='lg' onClick={()=>{setPtopBus(false)}}>Close</Button>}
                <Button variant="success" size='lg' onClick={()=>setSetcBus(true)}>SETC Bus</Button>
                {setcBus&& <Button variant='danger' size='lg' onClick={()=>{setSetcBus(false)}}>Close</Button>}

            </div>
         <div className='adminTableMainDiv'>
         {localBus && <div className='adminTableDiv'>
                    <h1>Local Bus Table</h1>
                    <Table variant='dark'>
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Bus No</th>
                                <th>Timing</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admin.map(adminData => (
                                <tr key={adminData.id}>
                                    {/* <td>{adminData.id}</td> */}
                                    <td>{adminData.busno}</td>
                                    <td>{adminData.time}</td>
                                    <td>{adminData.from}</td>
                                    <td>{adminData.to}</td>
                                    <td>
                                        <div className='adminTableBtn'>
                                            <Button variant="success" onClick={() => openPopup(adminData)}>Update</Button>
                                            <Button variant="danger" onClick={() => handleDelete(adminData.id)}>Delete</Button>
                                        </div>
                                  0
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}
                {/* Update Popup */}
                {popup &&
                    <div>
                        <div className='adminTableUpdate'>
                            <Form variant='dark'>
                                <h2>Update Admin Data</h2>
                                <Form.Label>Bus No:</Form.Label>
                                <Form.Control type="text" value={busno} onChange={(e) => setBusno(e.target.value)} />
                                <Form.Label>Timing:</Form.Label>
                                <Form.Control type="text" value={time} onChange={(e) => setTime(e.target.value)} />
                                <Form.Label>From:</Form.Label>
                                <Form.Control type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
                                <Form.Label>To:</Form.Label>
                                <Form.Control type="text" value={to} onChange={(e) => setTo(e.target.value)} />
                                <div className='adminFormBtn'>
                                    <Button variant="warning" onClick={handleUpdate}>Update</Button>
                                    <Button variant="danger" onClick={() => setPopup(false)}>Cancel</Button>
                                </div>


                                {/* <h2>Update Admin Data</h2>
                        <label>Bus No:</label>
                        <input type="text" value={busno} onChange={(e) => setBusno(e.target.value)} />
                        <label>Timing:</label>
                        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
                        <label>From:</label>
                        <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
                        <label>To:</label>
                        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
                        <button onClick={handleUpdate}>Update</button>
                        <button onClick={() => setPopup(false)}>Cancel</button> */}
                            </Form>
                        </div>
                    </div>
                }

               {ptopBus && <div className='adminTableDiv'>
                    <h1>P to P Bus Table</h1>
                    <Table variant='dark'>
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Bus No</th>
                                <th>Timing</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admin1.map(admin1Data => (
                                <tr key={admin1Data.id}>
                                    {/* <td>{adminData.id}</td> */}
                                    <td>{admin1Data.busno}</td>
                                    <td>{admin1Data.time}</td>
                                    <td>{admin1Data.from}</td>
                                    <td>{admin1Data.to}</td>
                                    <td>
                                        <div className='adminTableBtn'>
                                            <Button variant="success" onClick={() => openPopup1(admin1Data)}>Update</Button>
                                            <Button variant="danger" onClick={() => handleDelete1(admin1Data.id)}>Delete</Button>
                                        </div>
                                        {/* <button onClick={() => openPopup(adminData)}>Update</button>
                                <button onClick={() => handleDelete(adminData.id)}>Delete</button> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}

                {popup1 &&
                    <div>
                        <div className='adminTableUpdate'>
                            <Form variant='dark'>
                                <h2>Update Admin Data</h2>
                                <Form.Label>Bus No:</Form.Label>
                                <Form.Control type="text" value={busno1} onChange={(e) => setBusno1(e.target.value)} />
                                <Form.Label>Timing:</Form.Label>
                                <Form.Control type="text" value={time1} onChange={(e) => setTime1(e.target.value)} />
                                <Form.Label>From:</Form.Label>
                                <Form.Control type="text" value={from1} onChange={(e) => setFrom1(e.target.value)} />
                                <Form.Label>To:</Form.Label>
                                <Form.Control type="text" value={to1} onChange={(e) => setTo1(e.target.value)} />
                                <div className='adminFormBtn'>
                                    <Button variant="warning" onClick={handleUpdate1}>Update</Button>
                                    <Button variant="danger" onClick={() => setPopup1(false)}>Cancel</Button>
                                </div>
                            </Form>
                        </div>
                    </div>

                }
                {setcBus&&<div className='adminTableDiv'>
                    <h1>SETC Bus Table</h1>
                    <Table variant='dark'>
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Bus No</th>
                                <th>Timing</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admin2.map(admin2Data => (
                                <tr key={admin2Data.id}>
                                    {/* <td>{adminData.id}</td> */}
                                    <td>{admin2Data.busno}</td>
                                    <td>{admin2Data.time}</td>
                                    <td>{admin2Data.from}</td>
                                    <td>{admin2Data.to}</td>
                                    <td>
                                        <div className='adminTableBtn'>
                                            <Button variant="success" onClick={() => openPopup2(admin2Data)}>Update</Button>
                                            <Button variant="danger" onClick={() => handleDelete2(admin2Data.id)}>Delete</Button>
                                        </div>
                                        {/* <button onClick={() => openPopup(adminData)}>Update</button>
                                <button onClick={() => handleDelete(adminData.id)}>Delete</button> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}

                {popup2 &&
                    <div>
                        <div className='adminTableUpdate'>
                            <Form variant='dark'>
                                <h2>Update Admin Data</h2>
                                <Form.Label>Bus No:</Form.Label>
                                <Form.Control type="text" value={busno2} onChange={(e) => setBusno2(e.target.value)} />
                                <Form.Label>Timing:</Form.Label>
                                <Form.Control type="text" value={time2} onChange={(e) => setTime2(e.target.value)} />
                                <Form.Label>From:</Form.Label>
                                <Form.Control type="text" value={from2} onChange={(e) => setFrom2(e.target.value)} />
                                <Form.Label>To:</Form.Label>
                                <Form.Control type="text" value={to2} onChange={(e) => setTo2(e.target.value)} />
                                <div className='adminFormBtn'>
                                    <Button variant="warning" onClick={handleUpdate2}>Update</Button>
                                    <Button variant="danger" onClick={() => setPopup2(false)}>Cancel</Button>
                                </div>
                            </Form>
                        </div>
                    </div>

                }
            </div>
        </div>
    );
}
