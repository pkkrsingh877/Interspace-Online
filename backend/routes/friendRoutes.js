const express = require('express');
const { sendFriendRequest, acceptFriendRequest, rejectFriendRequest, unfriend, friends } = require('../controllers/friendController');

const router = express.Router();

// Route for sending friend request
router.post('/sendfriendreqest', sendFriendRequest);

// Route for accepting friend request
router.post('/acceptfriendreqest', acceptFriendRequest);

// Route for rejecting friend request
router.post('/rejectfriendreqest', rejectFriendRequest);

// Route for unfriending
router.post('/unfriend', unfriend);

// Route for getting all friends
router.get('/friends', friends);

module.exports = router;