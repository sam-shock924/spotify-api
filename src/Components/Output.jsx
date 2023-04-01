const Output = ({artistList}) => {
	const artists = artistList.map((band) => {
		return (
			<>
				<h2>{band.name}</h2>
				<h4>{band.popularity}</h4>
			</>
		);
	});
	return (
		<div>
			<p>{artists}</p>
		</div>
	);
};

export default Output;
