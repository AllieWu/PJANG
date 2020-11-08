//?? .env
const stripe = require('stripe')('sk_test_51HbYaBJLO8JomVlxJjLgosNPiIFuwG5xrS43edDpOOmcWjfbafUAZhqZYj54Ce96kcocA5PkPiI9F9cs4L4zQhM700NsAdmA7i')
const express = require('./config/express.js')

//initialize app, pass in any middleware
//?? middleware needed?
const app = express.init()
//app.use(express.static('.'));

//create a checkout session
//?? why async callback?
app.post('/create-session', async (req, res) => {

    const YOUR_DOMAIN = 'http://localhost:3000/Home';
    //const YOUR_DOMAIN = req.protocol + '://' + req.hostname + '/Home';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Laundr Bombs',
              images: ['https://i.imgur.com/EHyR2nP.png'],
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
        
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
    res.json({ id: session.id });
  });
 
// Use env port or default
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server now running on port ${port}!`));
