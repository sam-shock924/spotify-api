import ArtistCard from './Card';

export const Cardstack = () => {
	return (
		<div className='card-stack'>
			<ArtistCard title='Real Friends' subtitle='subtitle for Real Friends' />
			<ArtistCard title='Neck Deep' subtitle='subtitle for Neck Deep' />
			<ArtistCard title='I Prevail' subtitle='subtitle for I Prevail' />
			<ArtistCard title='Wage War' subtitle='subtitle for Wage War' />
			<ArtistCard
				title='Panic! At the Disco'
				subtitle='subtitle for Panic! At the Disco'
			/>
			<ArtistCard
				title='Falling in Reverse'
				subtitle='subtitle for Falling in Reverse'
			/>
		</div>
	);
};
