import ArtistCard from './Card';

const Random = () => {
	const handleClick = () => {
		window.open('www.google.com');
	};

	return (
		<div>
			<h1>Random Page</h1>
			<h2>Click on Artist for a random song!</h2>
			<ArtistCard onClick={handleClick} />
		</div>
	);
};

export default Random;
