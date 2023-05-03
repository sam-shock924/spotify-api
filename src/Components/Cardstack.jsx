import ArtistCard from './Card';

export const Cardstack = () => {
	const cardInfo = [
		{
			name: 'Real Friends',
			subtitle: '',
			url: 'https://open.spotify.com/artist/6dEtLwgmSI0hmfwTSjy8cw?si=opqjR46HSP6oiJ9BnSAVQQ',
			id: '6dEtLwgmSI0hmfwTSjy8cw',
			image: 'https://i.scdn.co/image/ab67616100005174bcc5fb0beecc3f557c00ca8e',
		},
		{
			name: 'Neck Deep',
			subtitle: '',
			url: 'https://open.spotify.com/artist/2TM0qnbJH4QPhGMCdPt7fH?si=Rgj9xfEYSviUWcwNM21SQg',
			id: '2TM0qnbJH4QPhGMCdPt7fH',
			image: 'https://i.scdn.co/image/ab67616100005174bf0520bc961208112148694c',
		},
		{
			name: 'Blink-182',
			subtitle: '',
			url: 'https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP?si=sQO0cG1LT76wLeDAN0XVkA',
			id: '6FBDaR13swtiWwGhX1WQsP',
			image: 'https://i.scdn.co/image/ab6761610000517433639aaeecfcc5ebada97476',
		},
		{
			name: 'Grayscale',
			subtitle: '',
			url: 'https://open.spotify.com/artist/6Xq9CIMYWK4RCrMVtfEOM0?si=Zn73dVmRRw6uiVqo83NDEg',
			id: '6Xq9CIMYWK4RCrMVtfEOM0',
			image: 'https://i.scdn.co/image/ab67616100005174af10e4673acb45ce87cfdd0a',
		},
		{
			name: 'Magnolia Park',
			subtitle: '',
			url: 'https://open.spotify.com/artist/7B76SsfzG0wWk1WEvGzCmY?si=OVhN8eaeThCU8ULRasQRHw',
			id: '7B76SsfzG0wWk1WEvGzCmY',
			image: 'https://i.scdn.co/image/ab67616100005174d1b8f60dd90402acdf5793ba',
		},
		{
			name: 'Between You and Me',
			subtitle: '',
			url: 'https://open.spotify.com/artist/1P1y4wp6V0CwjhGcXPKgAu?si=YfAbZprmTneA3JkBbIejfg',
			id: '1P1y4wp6V0CwjhGcXPKgAu',
			image: 'https://i.scdn.co/image/ab676161000051745d251ae3d35bd68d7f28343a',
		},
	];

	const cardList = cardInfo.map((card, index) => {
		return (
			<div className='card-stack' key={index}>
				<ArtistCard
					className='card-stack-card'
					title={card.name}
					subtitle={card.subtitle}
					url={card.url}
					image={card.image}
					cardId={card.id}
				/>
			</div>
		);
	});

	return <div>{cardList}</div>;
};
