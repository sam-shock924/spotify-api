import {Cardstack} from './Cardstack';

const Home = ({url}) => {
	const handleClick = () => {
		window.open(url);
	};

	return (
		<div>
			<h1>Home Page</h1>
			<Cardstack onClick={handleClick} />
		</div>
	);
};

export default Home;
