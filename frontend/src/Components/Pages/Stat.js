import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
// import '../Assets/statphoto.jpg'

const Stat = () => {
    const [foodRequests, setFoodRequests] = useState([]);

    useEffect(() => {
        const fetchFoodRequests = async () => {
            try {
                const response = await axios.get('http://localhost:8080/getallfoodreqs');
                setFoodRequests(response.data);
            } catch (error) {
                console.error('Error fetching food requests:', error);
            }
        };

        fetchFoodRequests();
    }, []);

    const interested = foodRequests.filter(request => request.ngoid !== null).length;
    const notInterested = foodRequests.filter(request => request.ngoid === null).length;

    const data = [
        {
            name: 'Food Requests',
            Interested: interested,
            'Not Interested': notInterested,
        },
    ];

    // //////////////////////////////////////////

    return (
        <div className='fullbody statphoto'>
        {/* <div style={styles.container}> */}
            <div className='login-container'>
            {/* <div style={styles.dashboard}> */}
            <div style={{backgroundColor:'transparent'}}>
            {/* <div> */}
                <h2>Statistics Dashboard</h2>
                <h4>Food Quantity Interested vs Not Interested</h4>

                    
                        <ResponsiveContainer style={{backgroundColor:'transparent'}} width="100%" height={400}>
                            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip
                                    position={{ x: 100, y: 100 }}
                                    contentStyle={{ padding: '10px' }}
                                />
                                <Legend />
                                <Bar dataKey="Interested" fill="#4CAF50" />
                                <Bar dataKey="Not Interested" fill="#F44336" />
                            </BarChart>
                        </ResponsiveContainer>
                    
            </div>
            </div>







        </div>
    );
};

const styles = {
    // container: {
    //     maxHeight: 'calc(100vh - 100px)', // Adjust according to your layout
    //     overflow: 'auto',
    // },
    // dashboard: {
    //     backgroundColor: '#f9f9f9',
    //     padding: '20px',
    //     borderRadius: '10px',
    //     maxWidth: '3000px',
    //     maxHeight: '3000px',
    //     margin: '0 auto',
    // },
    // header: {
    //     textAlign: 'center',
    //     marginBottom: '20px',
    // },
    // subHeader: {
    //     textAlign: 'center',
    //     marginBottom: '10px',
    // },
    // foodItemsContainer: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     justifyContent: 'space-around',
    // },
    // foodItemBox: {
    //     backgroundColor: '#fff',
    //     padding: '15px',
    //     border: '1px solid #ccc',
    //     borderRadius: '5px',
    //     margin: '10px',
    //     width: 'calc(33% - 20px)', // Adjust width for three columns with some margin
    //     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    // },
    // chartContainer: {
    //     marginTop: '30px',
    // },
};

export default Stat;