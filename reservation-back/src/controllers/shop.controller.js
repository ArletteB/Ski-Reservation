const Shop = require('../models/shop.model.js');

const shopController = {
    getAll: async(req, res) => {
        const shops = await Shop.find();
        res.send(shops)
    },
    getOne: async (req, res) => {
        const {id } = req.params;
         try {
           const shop = await Shop.findById(id);
           res.send(shop);
         } catch (error) {
           res.status(404).send({ message: "Shop not found" });
         }
    },
    create: async (req, res) => {
        try {
          const shop = await Shop.create(req.body);
          res.send(shop);
        } catch (error) {
          res.status(400).send({ message: "Shop not created" });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        try {
            const shop = await Shop.findByIdAndUpdate(id, req.body);
            res.send(shop);
        } catch (error) {
            res.status(400).send({ message: "Shop not updated" });
        }
    },
    delete: async(req, res) => {
        const { id } = req.params;
        try {
            const shop = await Shop.findByIdAndDelete(id);
            res.send(shop);
        } catch (error) {
            res.status(400).send({ message: "Shop not deleted" });
        }
    }
}

module.exports = shopController;