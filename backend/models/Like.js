const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = Schema({
  liker: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  tweet: {
    type: Schema.Types.ObjectId,
    reg: 'Tweet',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Like', likeSchema);