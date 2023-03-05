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
			name: 'Falling in Reverse',
			subtitle: 'subtitle for Falling in Reverse',
			url: 'https://open.spotify.com/artist/2CmaKO2zEGJ1NWpS1yfVGz?si=QkFUzhk_Ry-4WvE2ONLqjA',
		},
		{
			name: 'I Prevail',
			subtitle: 'subtitle for I Prevail',
			url: 'https://open.spotify.com/artist/3Uobr6LgQpBbk6k4QGAb3V?si=KvksF1viRUqMLmkrsHWQqA',
		},
		{
			name: 'Wage War',
			subtitle: 'subtitle for Wage War',
			url: 'https://open.spotify.com/artist/6bu7CtcOMWcS0BMq7snHW6?si=k8Q-FwnnSo26QGZ_cp5I1A',
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
