import {Cardstack} from './Cardstack';

const Random = () => {
	const handleClick = () => {
		window.open('https://www.google.com');
	};

	return (
		<div>
			<h1>Random Page</h1>
			<h2>Click on Artist for a random song!</h2>
			<Cardstack onClick={handleClick} />
		</div>
	);
};

export default Random;
