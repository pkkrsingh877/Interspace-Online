const express = require('express');
const { sendFriendRequest, acceptFriendRequest, rejectFriendRequest, unfriend, friends, potentialFriends } = require('../controllers/friendController');

const router = express.Router();

// Route for sending friend request
router.post('/sendFriendRequest', sendFriendRequest);

// Route for accepting friend request
router.post('/acceptFriendRequest', acceptFriendRequest);

// Route for rejecting friend request
router.post('/rejectFriendRequest', rejectFriendRequest);

// Route for unfriending
router.post('/unfriend', unfriend);

// Route for getting all friends
router.get('/friends/:id', friends);

// Route for listing potential friends
router.get('/potentialFriends', potentialFriends);

module.exports = router;