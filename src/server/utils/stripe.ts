import Stripe from 'stripe';
import config from '../config';

const stripe = new Stripe(config.keys.stripe, { apiVersion: '2020-08-27' });

export const charge = (id: string, amount: number) => {
    const stripeObj = {
        amount: amount * 100,
        currency: 'usd',
        source: id, 
        description: 'donate to the clocktower',
    }
    return stripe.charges.create(stripeObj);
}