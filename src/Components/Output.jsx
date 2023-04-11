const Output = ({queryList}) => {
	const query = queryList.map((query) => {
		return (
			<>
				<h2>{query.name}</h2>
			</>
		);
	});
	return (
		<div>
			<p>{query}</p>
		</div>
	);
};

export default Output;
