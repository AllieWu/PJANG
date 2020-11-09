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

    //console.log("request made");
    //console.log(req.body.itemsInCart[0].quantity);

    //req.body.itemsInCart[0].quantity

    console.log(req.body);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Watermelon Cucumber',
              images: ['https://i.imgur.com/X3mBQfo.jpg'],
            },
            unit_amount: 1899,
          },
          quantity: 5,
        },
        {
            price_data: {
                currency: 'usd',
                product_data: {
                name: 'White Gardenia',
                images: ['https://i.imgur.com/ZLWnA25.jpg'],
                },
                unit_amount: 1899,
            },
            quantity: 1,
        },
        {
            price_data: {
                currency: 'usd',
                product_data: {
                name: 'Mahogany Teakwood',
                images: ['https://i.imgur.com/AXs5etu.jpg'],
                },
                unit_amount: 1899,
            },
            quantity: 1,
        },
        {
            price_data: {
                currency: 'usd',
                product_data: {
                name: 'Fresh Air',
                images: ['https://i.imgur.com/JLbEBbg.jpg'],
                },
                unit_amount: 1899,
            },
            quantity: 1,
        },
        {
            price_data: {
                currency: 'usd',
                product_data: {
                name: 'Coffee Vanila',
                images: ['https://i.imgur.com/TVUydqG.jpg'],
                },
                unit_amount: 1899,
            },
            quantity: 1,
        },
        {
            price_data: {
                currency: 'usd',
                product_data: {
                name: 'Eucalyptus Tea Tree',
                images: ['https://i.imgur.com/cKUqNqK.jpg'],
                },
                unit_amount: 1899,
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
