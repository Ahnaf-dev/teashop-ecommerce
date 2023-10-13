import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("hello world")
    try {

      const session = await stripe.checkout.sessions.create({
        line_items: req.body.lineItems,
        mode: 'payment',
        payment_method_types: ['card'],
        success_url:`${process.env.NEXT_PUBLIC_SERVER_URL}/success`,
        cancel_url: process.env.NEXT_PUBLIC_SERVER_URL,
      })

      return res.status(201).json(session)

    } catch(error) {
      console.error(error)
      return res.status(500).json(error)
    }
  } else {
    res.status(400).json({error: "Req method not supported"})
  }
}
