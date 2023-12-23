import React from "react";
import "../css/CheckoutProduct.css";
import { useStateValue } from "./Stateprovider";

function CheckoutProduct({
	id,
	title,
	price,
	rating,
	image,
	quantity,
	hideButton,
}) {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
				quantity: 1,
			},
		});
		// console.log(item)
	};

	const DeleteItem = () => {
		dispatch({
			type: "DELETE",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
				quantity: 1,
			},
		});
		// console.log(item)
	};
	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct_image" src={image} alt="product-img" />

			<div className="checkoutProduct_info">
				<p className="checkoutProduct_title">{truncate(title, 100)}</p>
				<p className="checkoutProduct_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct_rating">
					{Array(parseInt(rating))
						.fill()
						.map((_, i) => (
							<p key={i}>🌟</p>
						))}
				</div>
				<div className="item_quantity">
					{!hideButton && <p>Qty= {quantity}</p>}
					<br />

					{!hideButton && (
						<button onClick={addToBasket}>
							{" "}
							<strong>+</strong>
						</button>
					)}
					{!hideButton && (
						<button onClick={DeleteItem}>
							<strong>-</strong>
						</button>
					)}
					{!hideButton && (
						<button onClick={removeFromBasket}>Remove from Basket</button>
					)}
					<br />
				</div>
				<div className="underline"></div>
			</div>
		</div>
	);
}

export default CheckoutProduct;
