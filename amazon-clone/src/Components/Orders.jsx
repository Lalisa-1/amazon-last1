import React, { useState, useEffect } from "react";
import { db } from "../assets/firebase";
import Order from "./Order";
import "../css/Orders.css";
import { useStateValue } from "./Stateprovider";
function Orders() {
	const [{ basket, user }, dispatch] = useStateValue();

	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) =>
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		} else {
			setOrders([]);
		}
	}, [user]);
	return (
		<div className="orders">
			<h1>Your Orders</h1>
			<div className="orders__order">
				{orders?.map((order) => (
					<Order key={order.id} order={order} />
				))}
			</div>
		</div>
	);
}

export default Orders;
