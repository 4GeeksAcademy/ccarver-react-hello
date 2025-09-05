import Card from "./Card.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<div className="row">
				<div className="col-2"></div>
				<div className="col-8 d-flex justify-content-between">
					<Card/>
					<Card/>
					<Card/>
				</div>
				<div className="col-2"></div>
			</div>
		</>
	);
};

export default Home;