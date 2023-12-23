import React from "react";
import "../css/Home.css";
import Product from "./Product";
function Home() {
	return (
		<div className="home">
			<div className="home_container">
				<img
					className="home_image"
					src="https://m.media-amazon.com/images/I/710Q61rv7mL._SX3000_.jpg"
					alt=""
				/>

				<div className="home_row">
					<Product
						id="12321341"
						title="Beats Studio Pro - Wireless Bluetooth Noise Cancelling Headphones - Personalized Spatial Audio, USB-C Lossless Audio, Apple & Android Compatibility, Up to 40 Hours Battery Life - Black"
						price={179.95}
						rating={5}
						image="https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_SY290_.jpg"
					/>
					<Product
						id="9538094"
						title="Beats Studio Buds - True Wireless Noise Cancelling Earbuds - Compatible with Apple & Android, Built-in Microphone, IPX4 Rating, Sweat Resistant Earphones, Class 1 Bluetooth Headphones - White"
						price={79.95}
						rating={4}
						image="https://m.media-amazon.com/images/I/41WDKPdYaFL._AC_SY460_.jpg"
					/>
					<Product
						id="4538094"
						title="BJYXOIHUB Smart Board, 49 Inch Digital Electronic Whiteboard and Smartboard for Classroom, Screen Mirroring for Live Streaming, Digital Signage Displays and Player for Advertising(Board Only)"
						price={1799.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/71Y3t3ldYgL._AC_SL1500_.jpg"
					/>
				</div>
				<div className="home_row">
					<Product
						id="13321341"
						title="Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image Processor and Full HD Videos"
						price={479}
						rating={4.7}
						image="https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SL1500_.jpg"
					/>
					<Product
						id="9638094"
						title="Sony a7 IV Full Frame Mirrorless Camera Body with FE 24-105mm F4 G OSS Zoom Lens ILCE-7M4/B + SEL24105G Bundle with Deco Gear Photography Backpack + Monopod + Extra Battery, LED and Kit Accessories"
						price={3498.0}
						rating={5}
						image="https://m.media-amazon.com/images/I/81o+wdUstFL._AC_SL1500_.jpg"
					/>
					<Product
						id="4638094"
						title="FX3 Full-Frame Cinema Line Camera with FE 16-35mm f/2.8 GM (G Master) E-Mount Lens, Wide-Angle, High-Resolution, Light and Compact for Digital Video"
						price={5796.0}
						rating={5}
						image="https://m.media-amazon.com/images/I/61AkA-6rklL._AC_UY436_FMwebp_QL65_.jpg"
					/>
				</div>
				<div className="home_row">
					<Product
						id="4903850"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
						price={199.99}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
					/>
					<Product
						id="23445930"
						title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
						price={98.99}
						rating={5}
						image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
					/>
					<Product
						id="3254354345"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						price={598.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					/>
				</div>
				<div className="home_row">
					<Product
						id="1103850"
						title="GLOBALWIN Women's Fashion Low Heels Lace Up Ankle Boots"
						price={59}
						rating={4.2}
						image="https://m.media-amazon.com/images/I/71Am8lvWpoL._AC_SX679_.jpg"
					/>
					<Product
						id="21445930"
						title="Silonn Nugget Ice Maker Countertop, Pebble Ice Maker with Soft Chewable Ice, One-Click Operation Ice Machine with Self-Cleaning, 33lbs/24H for Home,Kitchen,Office"
						price={189.99}
						rating={4.5}
						image="https://images-na.ssl-images-amazon.com/images/I/71Mp3Xt65KL._AC_UL675_SR675,480_.jpg"
					/>
					<Product
						id="3154354345"
						title="Stanley Quencher H2.0 Soft Matte Collection, Stainless Steel Vacuum Insulated Tumbler with Lid and Straw for Iced and Cold Beverages, Dune, 40 oz"
						price={50}
						rating={4.6}
						image="https://m.media-amazon.com/images/I/51gkY254o9L._AC_SL1500_.jpg"
					/>
				</div>
				<div className="home_row">
					<Product
						id="90829332"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
