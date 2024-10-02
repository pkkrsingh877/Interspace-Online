const User = require('../models/User');

// Controller to send Friend Request
const sendFriendRequest = async (req, res) => {
    try {
        const { friendUserId, userId } = req.body;

        const user = await User.findById(userId);

        // If They are already your friend
        if (user.friends.includes(friendUserId)) {
            return res.status(400).json({ message: 'User is already your friend' });
        }

        // If you have already sent them request
        if (user.friendRequestSent.includes(friendUserId)) {
            return res.status(400).json({ message: 'Friend request already sent' });
        }

        await User.findByIdAndUpdate(
            userId,
            { $push: { friendRequestSent: friendUserId } },
            { new: true }
        )
        await User.findByIdAndUpdate(
            friendUserId,
            { $push: { friendRequestReceived: userId } },
            { new: true }
        )
        res.status(201).json({ message: 'Success' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to accept Friend Request
const acceptFriendRequest = async (req, res) => {
    try {
        const { friendUserId, userId } = req.body;
        await User.findByIdAndUpdate(
            userId,
            { $pull: { friendRequestSent: friendUserId } },
            { $push: { friends: friendUserId } },
            { new: true }
        )
        await User.findByIdAndUpdate(
            friendUserId,
            { $pull: { friendRequestReceived: userId } },
            { $push: { friends: userId } },
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
            { $pull: { friendRequestSent: friendUserId } },
            { new: true }
        )
        await User.findByIdAndUpdate(
            friendUserId,
            { $pull: { friendRequestReceived: userId } },
            { new: true }
        )
        res.status(201).json({ message: 'Success' });
    } catch (error) {
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

// Controller to View All Friends
const friends = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId)
        res.status(201).json(user.friends);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { sendFriendRequest, acceptFriendRequest, rejectFriendRequest, unfriend, friends };