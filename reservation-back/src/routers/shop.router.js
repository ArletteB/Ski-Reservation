const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');

router.get('/shops', shopController.getAll);
router.get('/shops/:id', shopController.getOne);
router.post('/shops', shopController.create);
router.put('/shops/:id', shopController.update);
router.delete('/shops/:id', shopController.delete);

module.exports = router;
