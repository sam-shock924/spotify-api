import ArtistCard from './Card';

export const Cardstack = () => {
	return (
		<div className='card-stack'>
			<ArtistCard title='Real Friends' subtitle='subtitle for Real Friends' />
			<ArtistCard title='Neck Deep' subtitle='subtitle for Neck Deep' />
			<ArtistCard title='Blink-182' subtitle='subtitle for Blink-182' />
			<ArtistCard
				title='Falling in Reverse'
				subtitle='subtitle for Falling in Reverse'
			/>
			<ArtistCard title='I Prevail' subtitle='subtitle for I Prevail' />
			<ArtistCard title='Wage War' subtitle='subtitle for Wage War' />
		</div>
	);
};
