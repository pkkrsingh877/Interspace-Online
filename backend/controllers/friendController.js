const User = require('../models/User');

// Controller to send Friend Request
const sendFriendRequest = async (req, res) => {
    try {
        const { potentialFriendId, userId } = req.body;

        const user = await User.findById(userId);

        // If They are already your friend
        if (user.friends.includes(potentialFriendId)) {
            return res.status(400).json({ message: 'User is already your friend' });
        }

        // If you have already sent them request
        if (user.friendRequestSent.includes(potentialFriendId)) {
            return res.status(400).json({ message: 'Friend request already sent' });
        }

        const user1 = await User.findByIdAndUpdate(
            userId,
            { $push: { friendRequestSent: potentialFriendId } },
            { new: true }
        )
        const user2 = await User.findByIdAndUpdate(
            potentialFriendId,
            { $push: { friendRequestReceived: userId } },
            { new: true }
        )
        console.log(potentialFriendId, userId);
        res.status(201).json({ message: 'Success' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    }
};

// Controller to accept Friend Request
const acceptFriendRequest = async (req, res) => {
    try {
        const { friendUserId, userId } = req.body;
        console.log(friendUserId, userId)
        await User.findByIdAndUpdate(
            userId,
            {
                $pull: { friendRequestReceived: friendUserId },
                $push: { friends: friendUserId }
            },
            { new: true }
        )
        await User.findByIdAndUpdate(
            friendUserId,
            {
                $pull: { friendRequestSent: userId },
                $push: { friends: userId }
            },
            { new: true }
        )
        res.status(201).json({ message: 'Success' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to reject Friend Request
const rejectFriendRequest = async (req, res) => {
    try {
        const { friendUserId, userId } = req.body;

        await User.findByIdAndUpdate(
            userId,
            { $pull: { friendRequestReceived: friendUserId } },
            { new: true }
        )
        await User.findByIdAndUpdate(
            friendUserId,
            { $pull: { friendRequestSent: userId } },
            { new: true }
        )
        res.status(201).json({ message: 'Success' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    }
};

// Controller to Unfriend a Friend
const unfriend = async (req, res) => {
    try {
        const { friendUserId, userId } = req.body;
        await User.findByIdAndUpdate(
            userId,
            { $pull: { friends: friendUserId } },
            { new: true }
        )
        await User.findByIdAndUpdate(
            friendUserId,
            { $pull: { friends: userId } },
            { new: true }
        )
        res.status(201).json({ message: 'Success' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to List all Users
const potentialFriends = async (req, res) => {
    try {
        // Get the current user's ID from the request (assuming it's available in req.user._id)
        const { currentUserId } = req.query;
        console.log(currentUserId)

        // Find the current user
        const currentUser = await User.findById(currentUserId).select('friends friendRequestSent friendRequestReceived');

        // Gather all IDs to exclude (friends, requests sent/received, and the user himself)
        const excludedIds = [
            ...currentUser.friends,
            ...currentUser.friendRequestSent,
            ...currentUser.friendRequestReceived,
            currentUserId // Exclude the user himself
        ];

        // Query to find potential friends (users not in excludedIds)
        const potentialFriends = await User.find({
            _id: { $nin: excludedIds } // Exclude users based on the IDs
        });

        res.status(200).json(potentialFriends);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const friendRequestReceived = ('/api/friendrequestreceived', async (req, res) => {
    // Extract userId from query
    const userId = req.query.user;

    try {
        // Query to find friend requests received
        const user = await User.findById(userId).populate('friendRequestReceived');
        const friendRequests = user.friendRequestReceived;
        res.status(200).json(friendRequests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Backend route to get friend requests sent by the user
const friendRequestSent = ('/api/friendrequestsent', async (req, res) => {
    const userId = req.query.user;

    try {
        const user = await User.findById(userId).populate('friendRequestSent');
        const sentRequests = user.friendRequestSent;
        res.status(200).json(sentRequests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Controller to View All Friends
const friends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate('friends');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user.friends);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { potentialFriends, sendFriendRequest, acceptFriendRequest, rejectFriendRequest, unfriend, friends, friendRequestReceived, friendRequestSent };