// const functions = require("firebase-functions");
// app backend
// ready to go
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// - App config
const app = express();

// - Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;
	try {
		console.log("Payment Request Recieved for this amount >>> ", total);

		const paymentIntent = await stripe.paymentIntents.create({
			amount: parseInt(total), // subunits of the currency
			currency: "USD",
		});

		// OK - Created
		response.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error);
		response.status(500).send("server error");
	}
});

app.listen(10000, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Listening at 10000");
	}
});

// exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/e-lalisa/us-central1/api
