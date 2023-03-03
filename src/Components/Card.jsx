import Card from 'react-bootstrap/Card';

const ArtistCard = ({title, subtitle}) => {
	return (
		<div className='artist-card'>
			<Card>
				<Card.Body>
					<Card.Title id='card-title'>{title}</Card.Title>
					<Card.Subtitle id='card-subtitle'>{subtitle}</Card.Subtitle>
					<Card.Img id='card-img' src='/band-image.jpeg' />
				</Card.Body>
			</Card>
		</div>
	);
};

export default ArtistCard;
