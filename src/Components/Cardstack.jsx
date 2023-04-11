import ArtistCard from './Card';

export const Cardstack = () => {
	const artistInfo = [
		{
			name: 'Real Friends',
			subtitle: 'subtitle for Real Friends',
			url: 'https://open.spotify.com/artist/6dEtLwgmSI0hmfwTSjy8cw?si=opqjR46HSP6oiJ9BnSAVQQ',
		},
		{
			name: 'Neck Deep',
			subtitle: 'subtitle for Neck Deep',
			url: 'https://open.spotify.com/artist/2TM0qnbJH4QPhGMCdPt7fH?si=Rgj9xfEYSviUWcwNM21SQg',
		},
		{
			name: 'Blink-182',
			subtitle: 'subtitle for Blink-182',
			url: 'https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP?si=sQO0cG1LT76wLeDAN0XVkA',
		},
		{
			name: 'Grayscale',
			subtitle: 'subtitle for Grayscale',
			url: 'https://open.spotify.com/artist/6Xq9CIMYWK4RCrMVtfEOM0?si=Zn73dVmRRw6uiVqo83NDEg',
		},
		{
			name: 'Magnolia Park',
			subtitle: 'subtitle for Magnolia Park',
			url: 'https://open.spotify.com/artist/7B76SsfzG0wWk1WEvGzCmY?si=OVhN8eaeThCU8ULRasQRHw',
		},
		{
			name: 'Between You and Me',
			subtitle: 'subtitle for Between You and Me',
			url: 'https://open.spotify.com/artist/1P1y4wp6V0CwjhGcXPKgAu?si=YfAbZprmTneA3JkBbIejfg',
		},
	];

	const cardList = artistInfo.map((artist, index) => {
		return (
			<div className='card-stack' key={index}>
				<ArtistCard
					title={artist.name}
					subtitle={artist.subtitle}
					url={artist.url}
				/>
			</div>
		);
	});

	return <div>{cardList}</div>;
};
