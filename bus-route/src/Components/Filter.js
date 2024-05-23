import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Filters() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [output, setOutput] = useState([]);
    const [table, setTable] = useState(false);
    const [filterData, setFilteredData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/buses/get/${to}`)
            .then(res => {
                setOutput(res.data);
                setFilteredData(res.data)
            })
            .catch(err => console.log(err));
    }, [to]);

    const handleNavi = () => {
        navigate('/');
    };

    const getDetails = (e) => {
        setTo(e.target.value);
        const filtered = output.filter(bus => bus.from === from && bus.to === e.target.value);
        setFilteredData(filtered);
        setTable(true);
    };

    const clearFunction = () => {
        setFrom('');
        setTo('');
        setFilteredData(output)
        setTable(false)
    };

    return (
        <div className='filterMainDiv'>
            <div className='filterDiv'>
                <h2 className='bus-head'>Welcome To the Local bus</h2>
                <h1 className='bus-head'>Select the Location to travel</h1>
                <form className='filterForm'>
                    <Row>
                        <Col>
                            <InputGroup.Text className='filterS1' variant="dark" id="inputGroup-sizing-sm">From :
                                <Form.Select value={from} onChange={(e) => setFrom(e.target.value)}>
                                    <option value=''>Select your Starting point</option>
                                    <option value='ukkadam'>Ukkadam</option>
                                    <option value='GH'>GH</option>
                                    <option value="RTO">RTO</option>
                                    <option value='gandhipuram'>Gandhipuram</option>
                                    <option value='singanallur'>Singanallur</option>
                                </Form.Select>
                            </InputGroup.Text>
                        </Col>
                        <Col>
                            <InputGroup.Text className='filterS1' id="inputGroup-sizing-sm">To :
                                <Form.Select value={to} onChange={getDetails}>
                                    <option value=''>Select your Ending Point</option>
                                    <option value='ukkadam'>Ukkadam</option>
                                    <option value='GH'>GH</option>
                                    <option value="RTO">RTO</option>
                                    <option value='gandhipuram'>Gandhipuram</option>
                                    <option value='singanallur'>Ganapathy</option>
                                </Form.Select>
                            </InputGroup.Text>
                        </Col>
                    </Row>
                </form>
                <Button className='col-sm-2' variant="danger" onClick={handleNavi}>
                    Back
                </Button>
            </div>




            {/* {table && filterData.length > 0 && (
    <Table responsive striped bordered hover size='lg' variant='dark'>
        <thead>
            <tr>
                <th>Bus.No</th>
                <th>Time</th>
                <th>Start</th>
                <th>End</th>
            </tr>
        </thead>
        <tbody>
            {filterData.sort((a, b) => a.time.localeCompare(b.time)).map((x) => (
                <tr key={x.busno}>
                    <td>{x.busno}</td>
                    <td>{x.time}</td>
                    <td>{x.from}</td>
                    <td>{x.to}</td>
                </tr>
            ))}
        </tbody>
    </Table>
)}

{table && (
    <div className='col-sm-2'>
        <Button variant="light" onClick={clearFunction}>
            Clear
        </Button>
    </div>
)} */}


             {/* <h1 className='bus-head'>Select the Location to travel</h1>
            <form className='filterForm'>
                <Row>
                    <Col>
                        <Form.Select value={from} onChange={(e) => setFrom(e.target.value)}>
                            <option>Select your Starting point</option>
                            <option value='ukkadam'>Ukkadam</option>
                            <option value='GH'>GH</option>
                            <option value="RTO">RTO</option>
                            <option value='gandhipuram'>Gandhipuram</option>
                            <option value='singanallur'>Singanallur</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select value={to} onChange={getDetails}>
                            <option>Select your Ending Point</option>
                            <option value='ukkadam'>Ukkadam</option>
                            <option value='GH'>GH</option>
                            <option value="RTO">RTO</option>
                            <option value='gandhipuram'>Gandhipuram</option>
                            <option value='singanallur'>Singanallur</option>
                        </Form.Select>
                    </Col>
                </Row>
            </form> */}


                {/* <label>From:</label>
        <select value={from} onChange={(e)=>setFrom(e.target.value)}>
            <option value='ukkadam'>Ukkadam</option>
            <option value="GH">GH</option>
            <option value={'RTO'}>RTO</option>
            <option value='gandhipuram'>Gandhipuram</option>
        </select>
        <label>To:</label>
        <select value={to} onChange={getDetails}>
            <option value='ukkadam'>Ukkadam</option>
            <option value={'GH'}>GH</option>
            <option value={"RTO"}>RTO</option>
            <option value='gandhipuram'>Gandhipuram</option>
        </select><br></br> */}

                {table && filterData.length > 0&&(
                    <Table responsive striped bordered hover size='lg' variant='dark'>
                        <thead>
                            <tr>
                                <th>Bus.No</th>
                                <th>Time</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Track Your Bus</th>
                            </tr>
                        </thead>
                        <tbody>
                              {filterData.sort((a, b) => a.time.localeCompare(b.time)).map((x) =>
                               (<tr key={x.busno}>
                                <td>{x.busno}</td>
                                <td>{x.time}</td>
                                <td>{x.from}</td>
                                <td>{x.to}</td>
                            </tr>))}
                        </tbody>
                    </Table>
                )}
                {table&&<Button className='col-sm-2' variant="light" onClick={clearFunction}>
                    Clear
                </Button>}
                

{/* // {table   && filterData.length > 0 ( */}
{/* //     <table>
//         <thead>
//             <tr>
//                 <th>Bus.No</th>
//                 <th>Time</th>
//                 <th>Start</th>
//                 <th>End</th>
//             </tr>
//         </thead>
//         <tbody> */}
{/* //             {filterData.sort((a, b) => a.time.localeCompare(b.time)).map((x) => ( */}
{/* //                 <tr key={x.busno}>
//                     <td>{x.busno}</td>
//                     <td>{x.time}</td>
//                     <td>{x.from}</td>
//                     <td>{x.to}</td>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
// )} */}
        </div>
    );
}
