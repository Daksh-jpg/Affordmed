import React, { useState } from 'react';
import data from './Data';
import './App.css';

const DataTable = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (event, slNo) => {
        if (event.target.checked) {
            setSelectedRows([...selectedRows, slNo]);
        } else {
            setSelectedRows(selectedRows.filter(row => row !== slNo));
        }
    };

    const handleSelectAllChange = (event) => {
        setSelectAll(event.target.checked);
        if (event.target.checked) {
            const allSlNos = data.map(row => row.sl_no);
            setSelectedRows(allSlNos);
        } else {
            setSelectedRows([]);
        }
    };

    return (
        <div className="App">
            <div className="table-container-wrapper">
                <table className="table-container">
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={handleSelectAllChange}
                                />
                            </th>
                            <th>Sl. No</th>
                            <th>Customer Order ID</th>
                            <th>Sales Org</th>
                            <th>Distribution Channel</th>
                            <th>Company Code</th>
                            <th>Order Creating Date</th>
                            <th>Order Amount</th>
                            <th>Order Currency</th>
                            <th>Customer Number</th>
                            <th>Amount in USD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(row.sl_no)}
                                        onChange={event => handleCheckboxChange(event, row.sl_no)}
                                    />
                                </td>
                                <td>{row.id}</td>
                                <td>{row.customer_order_id}</td>
                                <td>{row.sales_org}</td>
                                <td>{row.distribution_channel}</td>
                                <td>{row.company_code}</td>
                                <td>{row.order_creation_date}</td>
                                <td>{row.order_amt}</td>
                                <td>{row.order_currency}</td>
                                <td>{row.customer_number}</td>
                                <td>{row.amount_in_usd}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
