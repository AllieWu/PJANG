const express = require('express'),
    productRouter = express.Router(),
    productController = require('../controllers/productController.js');

//retrieves product info needed for webpages
productRouter.get('/retrieve-products', productController.getAll);

//retrieves respectives price info needed for checkout
productRouter.get('/retrieve-prices', productController.getExtended);

module.exports = productRouter;