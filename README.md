Inventory and Manufacturing Management System
Overview
This project is a simplified version of an inventory and manufacturing unit management system focusing on an order system. It is built using React and Vite, styled with Tailwind CSS, and demonstrates proficiency in array and object manipulation, filtering, and mapping.

Features
Order List Page:
Display a list of orders with their ID, customer name, status, and item count.
Filter orders by status (e.g., Pending, Completed).
Sort orders by customer name and item count.
Order Details Page:
Show detailed information about a specific order.
Display the items in the order, their quantities, and their stock availability.
Mark the order as completed, updating the status accordingly.
Inventory Management:
Display a list of all items with their stock levels.
Filter items by stock availability (e.g., in stock, out of stock).
Add new items to the inventory.
Edit and delete items from the inventory.
Setup Instructions
Prerequisites
Ensure you have the following installed on your machine:

Node.js (>= 14.0.0)
npm (>= 6.0.0)
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/inventory-management-system.git
cd inventory-management-system
Install Dependencies:

bash
Copy code
npm install
Start the Development Server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000 to see the application in action.

Build for Production
To create a production build, run:

bash
Copy code
npm run build
npm run serve
Directory Structure
lua
Copy code
src/
├── components/
│   ├── Inventory.jsx
│   ├── OrderDetails.jsx
│   ├── Orders.jsx
├── data.js
├── index.css
├── main.jsx
├── App.jsx
├── pages/
│   ├── Inventory.jsx
│   ├── OrderDetails.jsx
│   ├── Orders.jsx
tailwind.config.cjs
index.html
package.json
vite.config.js


