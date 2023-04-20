import Card from 'react-bootstrap/Card';
import './Output.css';

const Output = ({queryList}) => {
	const queryCard = queryList.map((query) => {
		let imageUrl;
		if (query.type === 'track') {
			imageUrl = query.album.images.length ? query.album.images[1].url : null;
		} else {
			imageUrl = query.images.length ? query.images[1].url : null;
		}
		return (
			<Card className='search-card'>
				{imageUrl ? (
					<img src={imageUrl} id='search-card-image' alt={query.name} />
				) : (
					<p>No Image</p>
				)}
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
