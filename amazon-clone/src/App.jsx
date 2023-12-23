import React, { useEffect } from "react";
import "./App.css";
import "./Components/Header";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { auth } from "./assets/firebase";
import { useStateValue } from "./Components/Stateprovider";
import Payment from "./Components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Components/Orders";

function App() {
	const [{}, dispatch] = useStateValue();

	const stripePromise = loadStripe(
		"pk_test_51OOjXxFmnJr7bS639KygvNJAJoQnYAUQiGdWYLXzkqAhxVJcqhlHokFBbujVB9B6HADr2nmyPD0j1NBtUnAsImrk00xE5sfMFt"
	);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log("THE USER IS >>> ", authUser);
			if (authUser) {
				// the user just logged in / the user was logged in

				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/payment"
						element={<Elements stripe={stripePromise}>{<Payment />}</Elements>}
					/>
					<Route path="/orders" element={<Orders />} />
				</Routes>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
