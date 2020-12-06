const express = require('express'),
    stripeRouter = express.Router(),
    stripeController = require('../controllers/stripeController.js');

stripeRouter.post('/create-session', stripeController.checkout);

stripeRouter.get('/payment-intents', stripeController.history);

module.exports = stripeRouter;