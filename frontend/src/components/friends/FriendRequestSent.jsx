import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const FriendRequestSent = () => {
    const [friendRequestsSent, setFriendRequestsSent] = useState([]);
    const { user } = useContext(UserContext);

    const fetchFriendRequestsSent = async () => {
        if (user) {
            try {
                const response = await axios.get(`http://localhost:5000/api/friendrequestsent?user=${user.id}`);
                setFriendRequestsSent(response.data);
            } catch (error) {
                console.error("Error fetching friend requests sent:", error);
            }
        }
    };

    useEffect(() => {
        fetchFriendRequestsSent();
    }, [user]);

    return (
        <div>
            <h2>Friend Requests Sent</h2>
            <ul>
                {friendRequestsSent.length > 0 ? (
                    friendRequestsSent.map((request) => (
                        <div key={request._id}>
                            <h4><Link to={`/friendRequestSent/${request._id}`}>{request.username}</Link></h4>
                            <hr />
                        </div>
                    ))
                ) : (
                    <p>You have not sent any friend requests.</p>
                )}
            </ul>
        </div>
    );
}

export default FriendRequestSent;
