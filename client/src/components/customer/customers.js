import './customers.css';
import React,{ Component, useState, useEffect} from 'react';
function Customers() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('/api/customers')
      .then(res => res.json())
      .then(data => setCustomers(data,()=>console.log("Fetched",data)));

  })

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.firstName} {customer.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Customers;
