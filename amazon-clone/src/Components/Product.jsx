import React from "react";
import "../css/Product.css";
import { useStateValue } from "./Stateprovider";
function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	// console.log("this is the basket", basket);
	const addToBasket = () => {
		// dispatch the item into the data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};
	return (
		<div className="product">
			<div className="product_info">
				<p>{title}</p>
				<p className="product_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product_rating">
					{Array(parseInt(rating))
						.fill()
						.map((_, index) => (
							<p key={index}>🌟</p>
						))}
				</div>
			</div>
			<img src={image} alt="" />

			<button onClick={addToBasket}>addToBasket</button>
		</div>
	);
}

export default Product;
