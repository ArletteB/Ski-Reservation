const Comment = require('../models/comment.model');

const commentController = {
    getAll: async (req, res) => {
        const comments = await Comment.find();
        res.send(comments)
    },
    getOne: async (req, res) => {
        const { id } = req.params;
        try {
            const comment = await Comment.findById(id);
            res.send(comment);
        } catch (error) {
            res.status(404).send({ message: "Comment not found" });
        }
    },
    create: async(req, res) => {
        try {
            const comment = await Comment.create(req.body);
            res.send(comment);
        } catch (error) {
            res.status(400).send({ message: "Comment not created" });
        }
    },
    update: async(req, res) => {
        const { id } = req.params;
        try {
            const comment = await Comment.findByIdAndUpdate(id, req.body);
            res.send(comment);
        } catch (error) {
            res.status(400).send({ message: "Comment not updated" });
        }
    },
    delete: async(req, res) => {
        const { id } = req.params;
        try {
            const comment = await Comment.findByIdAndDelete(id);
            res.send(comment);
        } catch (error) {
            res.status(400).send({ message: "Comment not deleted" });
        }
    }
}

module.exports = commentController;