const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

router.get('/posts', postController.getAll);
router.get('/posts/:id', postController.getOne);
router.post('/posts', postController.create);
router.put('/posts/:id', postController.update);
router.delete('/posts/:id', postController.delete);

module.exports = router;
 
