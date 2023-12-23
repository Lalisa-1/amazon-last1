import React from "react";
import "../css/Footer.css";
import LanguageIcon from "@mui/icons-material/Language";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

// import { Link } from "react-router-dom";

function Footer() {
	const footerData = [
		{
			title: "Get to Know Us",
			items: [
				{ text: "Careers", href: "#" },
				{ text: "Amazon Newsletter", href: "#" },
				{ text: "About Amazon", href: "#" },
				{ text: "Accessibility", href: "#" },
				{ text: "Sustainability", href: "#" },
				{ text: "Press Center", href: "#" },
				{ text: "PInvestor Relations", href: "#" },
				{ text: "Amazon Devices", href: "#" },
				{ text: "Amazon Science", href: "#" },
			],
		},
		{
			title: "Amazon Payment Products",
			items: [
				{ text: "Amazon Payment Products", href: "#" },
				{ text: "Amazon Visa", href: "#" },
				{ text: "Amazon Store Card", href: "#" },
				{ text: "Amazon Secured Card", href: "#" },
				{ text: "Amazon Business Card", href: "#" },
				{ text: "Shop with Points", href: "#" },
				{ text: "Shop with Points", href: "#" },
				{ text: "Credit Card Marketplace", href: "#" },
				{ text: "Reload Your Balance", href: "#" },
				{ text: "Gift Cards", href: "#" },
				{ text: "Amazon Currency Converter", href: "#" },
			],
		},
		{
			title: "Make Money with Us",
			items: [
				{ text: "Start Selling with Amazon", href: "#" },
				{ text: "Sell apps on Amazon", href: "#" },
				{ text: "Supply to Amazon", href: "#" },
				{ text: "Protect & Build Your Brand", href: "#" },
				{ text: "Become an Affiliate", href: "#" },
				{ text: "Become a Delivery Driver", href: "#" },
				{ text: "Start a Package Delivery Business", href: "#" },
				{ text: "Advertise Your Products", href: "#" },
				{ text: "Self-Publish with Us", href: "#" },
				{ text: "Host an Amazon Hub", href: "#" },
				{ text: "›See More Ways to Make Money", href: "#" },
			],
		},

		{
			title: "Let Us Help You",
			items: [
				{ text: "Your Account", href: "#" },
				{ text: "Your Orders", href: "#" },
				{ text: "Shipping Rates & Policies", href: "#" },
				{ text: "Amazon Prime", href: "#" },
				{ text: "Returns & Replacements", href: "#" },
				{ text: "Manage Your Content and Devices", href: "#" },
				{ text: "Your Recalls and Product Safety Alerts", href: "#" },
				{ text: "Help", href: "#" },
			],
		},
	];
	// const downFooterData=[{
	// 	title:
	// 	id:[

	// 	]
	// }]
	return (
		<div className="foot">
			<div className="backToTop" id="back">
				<span>
					<a href="#" className="header__clearlink">
						Back to top
					</a>
				</span>
			</div>
			<div className="footer row container m-auto ">
				{footerData.map((section, index) => (
					<ul key={index} className="col-6 col-md-3 ">
						<h3>{section.title}</h3>
						{section.items.map((item, itemIndex) => (
							<li key={itemIndex}>
								<a href={item.href}>{item.text}</a>
							</li>
						))}
					</ul>
				))}
			</div>
			<div className="footer_logos_container">
				<div className="footer_logos_wrapper">
					<div className="header__clearlink">
						<div className="footer__logo">
							<img
								src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon-logo"
							/>
						</div>
					</div>
					<div className="ftr_wrapper_right ">
						<div className="language ftr_wrapper_right_brdr">
							<LanguageIcon fontSize="small" /> &nbsp;&nbsp;<span>English</span>
							<UnfoldMoreIcon fontSize="small" />
						</div>
						<div className="us_dollar ftr_wrapper_right_brdr">
							<p>
								$ &nbsp;&nbsp;<span>USD-U.S.Dollar</span>
							</p>
						</div>
						<div className="us ftr_wrapper_right_brdr">
							<img
								src="https://static.vecteezy.com/system/resources/thumbnails/002/494/983/small/usa-flag-icon-free-vector.jpg
"
								alt="us-flag"
							/>{" "}
							<span>United States</span>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="footer__credit ">
				<h4>Built by: (Lalisa W. Duresa)</h4>
			</div> */}
		</div>
	);
}

export default Footer;
