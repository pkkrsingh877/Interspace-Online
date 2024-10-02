const express = require('express');
const { sendFriendRequest, acceptFriendRequest, rejectFriendRequest, unfriend, friends } = require('../controllers/friendController');

const router = express.Router();

// Route for creating a new post
router.post('/sendfriendreqest', sendFriendRequest);

// Route for creating a new post
router.post('/acceptfriendreqest', acceptFriendRequest);

// Route for creating a new post
router.post('/rejectfriendreqest', rejectFriendRequest);

// Route for creating a new post
router.post('/unfriend', unfriend);

// Route for getting all friends
router.get('/friends', friends);

module.exports = router;