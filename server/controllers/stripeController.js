const config = require('../config/config.js'),
    stripeKey = process.env.REACT_APP_BKEY || config.REACT_APP_BKEY,
    stripe = require('stripe')(stripeKey);

module.exports = {

    //create a checkout session
    //?? why async callback?
    checkout: async (req, res) => {

        const YOUR_DOMAIN = req.body.domain;
        //const YOUR_DOMAIN = req.protocol + '://' + req.hostname + '/Home';

        let sessionInfo = {
            billing_address_collection: 'auto',
            shipping_address_collection: {
                allowed_countries: ['US', 'CA'],
            },
            payment_method_types: ['card'],
            line_items: req.body.cart,
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}?success=true`,
            cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        }

        if (req.body.user == null) {
            sessionInfo.customer = req.body.user;
            console.log("Creating session without customer ID provided...");
        }

        const session = await stripe.checkout.sessions.create(sessionInfo);
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