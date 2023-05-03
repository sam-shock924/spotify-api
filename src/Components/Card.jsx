import {Card} from 'react-bootstrap';

const ArtistCard = ({title, subtitle, url, image}) => {
	return (
		<div className='artist-card'>
			<Card
				onClick={() => {
					window.open(url);
				}}
			>
				<Card.Img id='card-img' src={image} />
				<Card.Body>
					<Card.Title id='card-title'>{title}</Card.Title>
					<Card.Subtitle id='card-subtitle'>{subtitle}</Card.Subtitle>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ArtistCard;
