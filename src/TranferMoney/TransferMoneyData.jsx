import React, { useState, useEffect } from 'react';
import './transferMoney.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function TransferMoneyData() {

    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState('');
    const [amount, setAmount] = useState('');
    const [transfer, setTransfer] = useState([])

    const navigate = useNavigate()
    function handleTransfer(e) {
        e.preventDefault();
        console.log(sender, receiver, amount)

        navigate('/transferMoneyData')
    }
    useEffect(()=>{
        
    const getUrl = "http://localhost:3001/money/transfer/get"
    axios.get(getUrl).then((response) => {
        setTransfer(response.data.data)
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
                        <a class="nav__link" href="#">Money Handler</a>
                    </li>
                </ul>
            </nav>

            <div class="container">
                <p class="display-1">Transfer Money Data</p>

                <div className='d-flex justify-content-end'>
                    {/* <Link to='/customerAdd'> <button className='bg-danger fs-3 p-1'>Back</button> </Link> */}

                    <Link to='/transferMoney'><button className='bg-primary fs-3 p-1'>Transfer Money</button></Link>
                </div>

                <br />
                <table className='table table'>
                    <thead className='fw-bold fs-4'>
                        <tr>
                            <th>Customer Name</th>
                            <th>Account No.</th>
                            <th>Bank Name</th>
                            <th>Sender Bank ID</th>
                            <th>Receiver Bank ID</th>
                            <th>IFSC CODE</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                        <tbody className=' fs-5'>
                    {transfer ? (transfer.map((data) => (
                            <tr>
                                <td>{data.customerName} </td>
                                <td>{data.Amount}</td>
                                <td>{data.BankName}</td>
                                <td>{data.senderBankID} </td>
                                <td>{data.ReceiverBankID}</td>
                                <td>{data.IFSCCODE}</td>
                                <td>{data.Amount}</td>
                                <td className='text-success'>Success</td>
                            </tr>
                    ))) : (
                        null
                    )}
                        </tbody>

                </table>

                <ul class="transfers list-unstyled"></ul>
            </div>
        </>
    );
}

export default TransferMoneyData;