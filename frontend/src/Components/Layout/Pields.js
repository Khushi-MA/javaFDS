// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const COLORS = ['#4CAF50', '#F44336']; // Colors for the pie chart

// const AdministratorDashboard = () => {
//   const [foodItems, setFoodItems] = useState([]);

//   useEffect(() => {
//     // Function to fetch food items from backend when component mounts
//     const fetchFoodItems = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/food');
//         setFoodItems(response.data); // Assuming response.data is an array of food items with interested status
//       } catch (error) {
//         console.error('Error fetching food items:', error);
//       }
//     };

//     fetchFoodItems(); // Call the fetch function when component mounts
//   }, []); // Empty dependency array ensures this effect runs only once when the component mounts

//   // Calculate quantities for interested and not interested items
//   const interestedQuantity = foodItems
//     .filter(item => item.interested)
//     .reduce((total, item) => total + item.quantity, 0);
//   const notInterestedQuantity = foodItems
//     .filter(item => !item.interested)
//     .reduce((total, item) => total + item.quantity, 0);

//   const data = [
//     { name: 'Interested', value: interestedQuantity },
//     { name: 'Not Interested', value: notInterestedQuantity },
//   ];

//   return (
//     <div style={styles.container}>
//       <div style={styles.dashboard}>
//         <h2 style={styles.header}>Administrator Dashboard</h2>
//         <div>
//           <h3 style={styles.subHeader}>Food Items</h3>
//           <div style={styles.foodItemsContainer}>
//             {foodItems.map((foodItem, index) => (
//               <div key={index} style={styles.foodItemBox}>
//                 <p><strong>Name:</strong> {foodItem.name}</p>
//                 <p><strong>Quantity:</strong> {foodItem.quantity}</p>
//                 <p><strong>Duration:</strong> {foodItem.duration}</p>
//                 <p><strong>Interested:</strong> {foodItem.interested ? 'Yes' : 'No'}</p>
//               </div>
//             ))}
//           </div>
//           <div style={styles.chartContainer}>
//             <h3 style={styles.subHeader}>Food Quantity Interested vs Not Interested</h3>
//             <ResponsiveContainer width="100%" height={400}>
//               <PieChart>
//                 <Pie
//                   data={data}
//                   dataKey="value"
//                   nameKey="name"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={150}
//                   fill="#8884d8"
//                   label
//                 >
//                   {data.map((entry, index) => (
//                     <Cell key={cell-${index}} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxHeight: 'calc(100vh - 100px)', // Adjust according to your layout
//     overflow: 'auto',
//   },
//   dashboard: {
//     backgroundColor: '#f9f9f9',
//     padding: '20px',
//     borderRadius: '10px',
//     maxWidth: '3000px',
//     maxHeight: '3000px',
//     margin: '0 auto',
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   subHeader: {
//     textAlign: 'center',
//     marginBottom: '10px',
//   },
//   foodItemsContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   foodItemBox: {
//     backgroundColor: '#fff',
//     padding: '15px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     margin: '10px',
//     width: 'calc(33% - 20px)', // Adjust width for three columns with some margin
//     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//   },
//   chartContainer: {
//     marginTop: '30px',
//   },
// };

// export default AdministratorDashboard;



