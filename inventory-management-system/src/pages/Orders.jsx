import React, { useState } from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState(data.orders);
  const [statusFilter, setStatusFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filterOrders = (orders) => {
    return orders.filter(order => statusFilter ? order.status === statusFilter : true);
  };

  const sortOrders = (orders) => {
    if (sortOption === 'customer') {
      return orders.sort((a, b) => a.customer.localeCompare(b.customer));
    } else if (sortOption === 'itemCount') {
      return orders.sort((a, b) => a.items.length - b.items.length);
    }
    return orders;
  };

  const filteredOrders = sortOrders(filterOrders(orders));

  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="mb-4">
        <select onChange={(e) => setStatusFilter(e.target.value)} className="mr-2 p-2 border">
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <select onChange={(e) => setSortOption(e.target.value)} className="p-2 border">
          <option value="">Sort By</option>
          <option value="customer">Customer Name</option>
          <option value="itemCount">Item Count</option>
        </select>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Item Count</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.customer}</td>
              <td className={`border text-black px-4 py-2  }`}>{order.status}</td>
              <td className="border px-4 py-2">{order.items.length}</td>
              <td className="border px-4 py-2">
                <Link to={`/orders/${order.id}`} className="text-blue-500">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
