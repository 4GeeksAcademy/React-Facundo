import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Welcome from "./Welcome";
import Nav from "./Nav";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Nav></Nav>
		    <Welcome></Welcome>
			<div className="cardContainer">
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;
