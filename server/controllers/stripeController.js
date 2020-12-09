const stripeKey =
    process.env.REACT_APP_BKEY || require("../config/config.js").REACT_APP_BKEY,
  stripe = require("stripe")(stripeKey);

module.exports = {
  //create a checkout session
  //?? why async callback?
  checkout: async (req, res) => {
    console.log(req.body.domain);
    console.log(req.body.customer);

    const YOUR_DOMAIN = req.body.domain;
    //const YOUR_DOMAIN = req.protocol + '://' + req.hostname + '/Home';

    let sessionInfo = {
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      payment_method_types: ["card"],
      line_items: req.body.cart,
      mode: "payment",
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    };

    if (req.body.customer != null) {
      sessionInfo.customer = req.body.customer.id;
      console.log("Creating session with customer ID provided...");
      console.log(sessionInfo);
    }

    const session = await stripe.checkout.sessions.create(sessionInfo);
    res.json({ id: session.id });
  },

  /*
    prod_IQUJ5Q3BtHSeGP
            line_items: req.body,

    */

  history: async (req, res) => {
    const paymentIntents = await stripe.paymentIntents.list({
      limit: 3,
      customer: req.query.ID,
    });
    res.json({ success: true, payments: paymentIntents.data });
  },

  findSession: async (req, res) => {
    const session = await stripe.checkout.sessions.list({
      payment_intent: req.query.ID,
    });
    res.json({ success: true, session: session.data });
  },

  findItems: async (req, res) => {
    console.log(req.query.ID);
    const items = await stripe.checkout.sessions.listLineItems(req.query.ID);
    res.json({ success: true, line_items: items.data });
  },
};
