const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model('User');
const Tweet = mongoose.model('Tweet');
const Like = mongoose.model('Like');
const { requireUser } = require('../../config/passport');

router.get('/tweet/:tweetId', async (req, res) => {
    try {
      const likes = await Tweet.find({tweet: tweet._id})
      
    }
    catch(err) {
      return res.json([]);
    }
  });

router.post('/tweet/:tweetId', requireUser, async (req, res, next) => {
    try {
      const tweet = await Tweet.findById(req.params.tweetId)
      const newLike = new Like({
        tweet: tweet,
        author: req.user._id
      });

      let like = await newLike.save();
      like = await like.populate('liker', '_id, username');
      return res.json(like)
    }

    catch(err) {
      next(err);
    }
  });