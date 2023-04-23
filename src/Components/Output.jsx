import Card from 'react-bootstrap/Card';
import './Output.css';

const Output = ({queryList}) => {
	const queryCard = queryList.map((query) => {
		console.log(query);
		let cardTitle;
		let cardSubtitle;
		let imageUrl;
		if (query.type === 'track') {
			imageUrl = query.album.images.length ? query.album.images[1].url : null;
		} else {
			imageUrl = query.images.length ? query.images[1].url : null;
		}

		if (query.type === 'artist') {
			cardTitle = query.name;
		} else {
			cardTitle = query.name;
			cardSubtitle = query.artists[0].name;
		}

		return (
			<Card className='search-card'>
				{imageUrl ? (
					<img src={imageUrl} id='search-card-image' alt={query.name} />
				) : (
					<p>No Image</p>
				)}
				<Card.Body>
					<Card.Title id='blank-title'>{cardTitle}</Card.Title>
					<Card.Subtitle id='blank-subtitle'>{cardSubtitle}</Card.Subtitle>
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
