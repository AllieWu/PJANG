const config = require('../config/config.js'),
    stripeKey = process.env.REACT_APP_BKEY || config.REACT_APP_BKEY,
    stripe = require('stripe')(stripeKey);

module.exports = {

    //create a checkout session
    //?? why async callback?
    checkout: async (req, res) => {

        const YOUR_DOMAIN = 'http://localhost:3000/Home';
        //const YOUR_DOMAIN = req.protocol + '://' + req.hostname + '/Home';

        const session = await stripe.checkout.sessions.create({
            billing_address_collection: 'auto',
            shipping_address_collection: {
                allowed_countries: ['US', 'CA'],
            },
            payment_method_types: ['card'],
            line_items: [{
                price: 'price_1HpdKdJLO8JomVlxhZCNxCfn',
                quantity: 1,
              }],
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}?success=true`,
            cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        });
        res.json({ id: session.id });
    },

    /*
    prod_IQUJ5Q3BtHSeGP
            line_items: req.body,

    */

    history: async (req, res) => {
        console.log(req.body);
        console.log(req.params);
        console.log(req.query);
        const paymentIntents = await stripe.paymentIntents.list({
            limit: 3,
            customer: req.query.ID
        });
        res.json({ success: true, payments: paymentIntents.data });
    }
}