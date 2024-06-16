import React, { useState } from 'react';
import data from '../data';

const Inventory = () => {
  const [items, setItems] = useState(data.items);
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [filter, setFilter] = useState('');

  const addItem = () => {
    const newItem = { id: items.length + 1, name, stock: parseInt(stock) };
    setItems([...items, newItem]);
    setName('');
    setStock('');
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const filteredItems = items.filter(item => {
    if (filter === 'inStock') return item.stock > 0;
    if (filter === 'outOfStock') return item.stock <= 0;
    return true;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <div className="mb-4">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name" className="mr-2 p-2 border" />
        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" className="mr-2 p-2 border" />
        <button onClick={addItem} className="bg-green-500 text-white px-4 py-2 rounded">Add Item</button>
      </div>
      <div className="mb-4">
        <select onChange={(e) => setFilter(e.target.value)} className="p-2 border">
          <option value="">All</option>
          <option value="inStock">In Stock</option>
          <option value="outOfStock">Out of Stock</option>
        </select>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(item => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.stock}</td>
              <td className="border px-4 py-2">
                <button onClick={() => deleteItem(item.id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
