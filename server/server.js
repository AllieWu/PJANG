require('dotenv').config()
const stripe = require('stripe')(process.env.REACT_APP_BKEY)
const express = require('./config/express.js')

//initialize app, pass in any middleware
//?? middleware needed?
const app = express.init()
//app.use(express.static('.'));

//create a checkout session
//?? why async callback?
app.post('/create-session', async (req, res) => {

    console.log(process.env.REACT_APP_BKEY);

    console.log(req.body);
    console.log(req.body[0]);

    const YOUR_DOMAIN = 'http://localhost:3000/Home';
    //const YOUR_DOMAIN = req.protocol + '://' + req.hostname + '/Home';

    const session = await stripe.checkout.sessions.create({
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      payment_method_types: ['card'],
      line_items: req.body,
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
    res.json({ id: session.id });
  });
 
// Use env port or default
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server now running on port ${port}!`));
