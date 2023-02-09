const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShopSchema = new Schema({
    id: String,
    name: String,
    addresse: String,
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
 
})

module.exports = mongoose.model('Shop', ShopSchema);