import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';

const OrderDetails = () => {
  const { id } = useParams();
  const order = data.orders.find(order => order.id === parseInt(id));

  const [orderStatus, setOrderStatus] = useState(order.status);

  const markAsCompleted = () => {
    setOrderStatus('Completed');
    // Update the order status in your data source
  };

  return (
    <div className="container mx-auto p-4">
      {order ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Order Details</h1>
          <p><strong>Customer:</strong> {order.customer}</p>
          <p><strong>Status:</strong> {orderStatus}</p>
          <h2 className="text-xl font-bold mt-4">Items</h2>
          <ul className="list-disc ml-5">
            {order.items.map(item => (
              <li key={item.id}>
                {item.name} - {item.quantity} (In Stock: {data.items.find(i => i.id === item.id).stock})
              </li>
            ))}
          </ul>
          <button onClick={markAsCompleted} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Mark as Completed
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OrderDetails;
