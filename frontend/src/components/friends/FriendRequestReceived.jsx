import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const FriendRequestReceived = () => {
    const [receivedRequests, setReceivedRequests] = useState([]);
    const { user } = useContext(UserContext);

    const fetchReceivedRequests = async () => {
        if (user) {
            const response = await axios.get(`http://localhost:5000/api/friendrequestreceived?user=${user.id}`);
            setReceivedRequests(response.data);
        }
    };

    useEffect(() => {
        fetchReceivedRequests();
    }, [user]);
    return (
        <div>
            <h2>Friend Requests Received</h2>
            <ul>
                {receivedRequests ? (
                    receivedRequests.map((receivedRequest) => (
                        <div key={receivedRequest._id}>
                            <h4><Link to={`/receivedRequestRecieved/${receivedRequest._id}`}>{receivedRequest.username}</Link></h4>
                            <hr />
                        </div>
                    ))
                ) : (
                    <p>You have not received any friend requests.</p>
                )}
            </ul>
        </div>
    );
}

export default FriendRequestReceived;