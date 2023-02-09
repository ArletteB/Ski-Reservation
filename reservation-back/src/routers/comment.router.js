const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');

router.get('/comments', commentController.getAll);
router.get('/comments/:id', commentController.getOne);
router.post('/comments', commentController.create);
router.put('/comments/:id', commentController.update);
router.delete('/comments/:id', commentController.delete);

module.exports = router;
