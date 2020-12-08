const config = require('../config/config.js'),
    stripeKey = process.env.REACT_APP_BKEY || config.REACT_APP_BKEY,
    stripe = require('stripe')(stripeKey);

module.exports = {
    getAll: async (req, res) => {
        try {
            const products = await stripe.products.list({
                limit: 6,
            });
            res.json({success: true, products: products.data})
        } catch(err) {
            res.json({success: false, code: err.code})
        }
    },

    getExtended: async (req, res) => {
        try {
            const prices = await stripe.prices.list({
                limit: 6,
            });
            res.json({success: true, prices: prices.data})
        } catch(err) {
            res.json({success: false, code: err.code})
        }
    }
}