const Post = require('../models/post.model');

const postController = {
    getAll: async (req, res) =>{
        const posts = await Post.find();
        res.send(posts)
    },
    getOne: async (req, res) =>{
        const { id } = req.params;
        try {
            const post = await Post.findById(id);
            res.send(post);
        } catch (error) {
            res.status(404).send({ message: "Post not found"});
        }
    },
    create: async (req, res) =>{
        try {
            const post = await Post.create(req.body);
            res.send(post);
        } catch (error) {
            res.status(400).send({ message: "Post not created"});
        }
    },
    update: async (req, res) =>{
        const { id } = req.params;
        try {
            const post = await Post.findByIdAndUpdate(id, req.body)
            res.send(post);
        } catch (error) {
            res.status(400).send({ message: "Post not updated"});
        }
    },
    delete: async (req, res) =>{
        const { id } = req.params;
        try {
            const post = await Post.findByIdAndDelete(id);
            res.send(post);
        } catch (error) {
            res.status(400).send({ message: "Post not deleted"});
        }
    }
}

module.exports = postController;