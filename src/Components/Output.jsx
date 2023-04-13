import Card from 'react-bootstrap/Card';
import './Output.css';

const Output = ({queryList}) => {
	const queryCard = queryList.map((query) => {
		return (
			<Card>
				{query.images.length ? (
					<img src={query.images[1].url} id='search-card-image' />
				) : (
					<>No Image</>
				)}
				{/* <Card.Img src='queryImage' /> */}
				<Card.Body>
					<Card.Title id='blank-title'>{query.name}</Card.Title>
					<Card.Subtitle id='blank-subtitle'>{query.type}</Card.Subtitle>
				</Card.Body>
			</Card>
		);
	});
	return (
		<div>
			<p>{queryCard}</p>
		</div>
	);
};

export default Output;
