import React from 'react'
import axios from 'axios';

const History = (props) => {

    window.onload = async () => {
        console.log("hi");
        const customer = props.currentUser.id
        console.log(customer);
        console.log("Getting payment history...");
        const response = await axios.get( '/api/stripe/payment-intents?ID=' + customer);
        console.log("Payment history recieved!");
        console.log(response);
    }

    return (
        <div>
            <h1>Welcome to your dashboard!</h1>
            <h1>{props.currentUser.name}</h1>
        </div>
    )
};

export default History;