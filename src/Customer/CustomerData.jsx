import React, { useState, useEffect } from 'react';
import './customer.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function CustomerData() {

    const [data, setData] = useState([])


    useEffect(()=>{
        
        const getUrl = "http://localhost:3001/customer/get"
        axios.get(getUrl).then((response) => {
            setData(response.data.data)
            console.log("transfer ammount", response.data.data);
        }).catch(error => console.error(error))
        },[])
    return (
        <>
            <nav class="nav">
                <img
                    src="/src/HomePage/img/banking-logo.png"
                    alt="Bankist logo"
                    class="nav__logo"
                    id="logo"
                    designer="Jonas"
                    data-version-number="3.0"
                />
                <ul class="nav__links">
                    <li class="nav__item">
                        <a class="nav__link" href="/HomePage">Home</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="/customerData">Customers</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="/transferMoneyData">Money Handler</a>
                    </li>
                </ul>
            </nav>

            <div class="container">
                <p class="display-1">Customer Data</p>

                <div className='d-flex justify-content-end'>
                    {/* <Link to='/customerAdd'> <button className='bg-danger fs-3 p-1'>Back</button> </Link> */}

                    <Link to='/customerAdd'><button className='bg-primary fs-3 p-1'>Add Customer</button></Link>
                </div>

                <br />
                <table className='table table'>
                    <thead className='fs-3'>
                        <tr>
                           
                            <th>Customer Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Full Address</th>
                            <th>Account No.</th>
                            <th>Bank ID</th>
                        </tr>
                    </thead>

                    <tbody className='fs-4'>
{/* 
                        <tr>
                            <td>Asfak khan </td>
                            <td>Male</td>
                            <td>25</td>
                            <td>Near Bus Stand, Hariyana</td>
                            <td>89564587456</td>
                            <td>SBI454545</td>
                            <td className='text-success' style={{ cursor: 'pointer' }}>Update</td>
                            <td className='text-danger' style={{ cursor: 'pointer' }}>Delete</td>
                        </tr> */}



                        {data ? (data.map((data) => (
                            <tr>
                                <td>{data.CustomerName} </td>
                                <td>{data.Gender}</td>
                                <td>{data.Age}</td>
                                <td>{data.FullAddress} </td>
                                <td>{data.AccountNo}</td>
                                <td>{data.BankID}</td>
                            </tr>
                    ))) : (
                        null
                    )}
                    </tbody>
                </table>

                <ul class="transfers list-unstyled"></ul>
            </div>
        </>
    )

   
}

export default CustomerData;


