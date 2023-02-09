const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    id: String,
    userName: String,
    description: String,
    starts: String,
    createdAt: Date,
    post: { type: Schema.Types.ObjectId, ref: 'Post' }
})


module.exports = mongoose.model('Comment', CommentSchema);