const Output = ({artistList}) => {
	const artists = artistList.map((band) => {
		return (
			<>
				<p>{band.name}</p>
				<p>{band.popularity}</p>
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
