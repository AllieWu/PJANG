const express = require('express'),
    stripeRouter = express.Router(),
    stripeController = require('../controllers/stripeController.js');

stripeRouter.post('/create-session', stripeController.checkout);

stripeRouter.get('/payment-intents', stripeController.history);

stripeRouter.get('/sessions', stripeController.findSession);

stripeRouter.get('/line-items', stripeController.findItems);

module.exports = stripeRouter;