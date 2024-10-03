const FriendRequestSent = () => {
    const [friends, setFriends] = useState([]);

    const fetchFriends = async () => {
        const response = await axios.get('http://localhost:5000/api/friends');
        setFriends(response.data);
    };

    useEffect(() => {
        fetchFriends();
    }, []);

    return (
        <div>
            <h2>Friends</h2>
            <ul>
                {friends ? (
                    friends.map((friend) => (
                        <div key={friend._id}>
                            <h4><Link to={`/friends/${friend._id}`}>{friend.username}</Link></h4>
                            <hr />
                        </div>
                    ))
                ) : (
                    <p>No friends Available to view!</p>
                )}
            </ul>
        </div>
    );
}

export default FriendRequestSent;