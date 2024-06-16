import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className=" font-bold text-center text-4xl mb-4">Inventory and Manufacturing Management System</h1>
      <div className=" flex mt-10 justify-center items-center gap-6">
        <Link to="/orders" className="mr-4 bg-red-500 px-5 py-2 rounded-md  text-white">Orders</Link>
        <Link to="/inventory" className="bg-blue-500 px-5 py-2 rounded-md  text-white">Inventory</Link>
      </div>
      <div className='grid grid-cols-2 gap-5 mt-10'>
           <img src={img1} className='rounded-md' alt="image" />
           <img src={img2} className='rounded-md' alt="image" />
           <img src={img4} className='rounded-md' alt="image" />
           <img src={img5} className='rounded-md' alt="image" />
           <img src={img3} className='rounded-md' alt="image" />
           <img src={img1} className='rounded-md' alt="image" />
          
          
      </div>
    </div>
  );
};

export default App;
