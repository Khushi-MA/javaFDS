import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Addfoodreq = () => {
    const location = useLocation();
    const fdsusername = location.state.exportfdsusername;
    const [fdsuser, setFdsuser] = useState(null);

    useEffect(() => {
        const fetchFdsUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/getfdsuserbyfdsusername/${fdsusername}`);
                setFdsuser(response.data);
            } catch (error) {
                console.error(`Error fetching fdsuser: ${error}`);
            }
        };

        fetchFdsUser();
    }, [fdsusername]);

    return (
        <div>
            <h1>Welcome, {fdsusername}</h1>
            {fdsuser && <pre>{JSON.stringify(fdsuser, null, 2)}</pre>}
        </div>
    );
};

export default Addfoodreq;