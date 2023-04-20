// import ArtistCard from './Card';
import Card from 'react-bootstrap/Card';

export const Cardstack = ({artistInfo, name, subtitle, url}) => {
	const cardList = artistInfo.map((artist, index) => {
		return (
			<div className='card-stack' key={index}>
				<div className='artist-card'>
					<Card>
						<Card.Img id='card-img' src='/band-image.jpeg' />
						<Card.Body>
							<Card.Title id='card-title'>{artist.name}</Card.Title>
							<Card.Subtitle id='card-subtitle'>
								{artist.subtitle}
							</Card.Subtitle>
						</Card.Body>
					</Card>
				</div>

				{/* <ArtistCard
					title={artist.name}
					subtitle={artist.subtitle}
					url={artist.url}
				/> */}
			</div>
		);
	});

	return <div>{cardList}</div>;
};
