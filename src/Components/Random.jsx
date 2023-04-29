import {Cardstack} from './Cardstack';
import ArtistCard from './Card';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Random = () => {
	const clientId = '974646a87ae344318fc25237004b3b81';
	const clientSecret = 'aaad82d9a61d4a6a9c8bbbc6a8da63ef';
	const [token, setToken] = useState('');
	const [newCardUrl, setNewCardUrl] = useState('');
	const [newCard, setNewCard] = useState(<></>);

	useEffect(() => {
		let tokenParams = {
			method: 'POST',
			url: 'https://accounts.spotify.com/api/token',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			data: new URLSearchParams({
				grant_type: 'client_credentials',
				client_id: clientId,
				client_secret: clientSecret,
			}),
		};
		async function getToken() {
			const fetchTokenCall = await axios(tokenParams).then((res) =>
				setToken(res.data.access_token)
			);
		}
		getToken();
	}, []);

	let searchParams = {
		method: 'GET',
		url: `https://api.spotify.com/v1/artists/6dEtLwgmSI0hmfwTSjy8cw/top-tracks`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
		params: {
			market: 'US',
		},
	};

	async function getRandomSong() {
		const tracks = await axios(searchParams).then((res) => res.data.tracks);
		const index = Math.floor(Math.random() * tracks.length);
		const randomSong = tracks[index];
		setNewCardUrl(randomSong.external_urls.spotify);
		console.log(randomSong);
		console.log(newCardUrl);
		const newCardElement = (
			<ArtistCard
				title={randomSong.name}
				subtitle={randomSong.album.name}
				url={newCardUrl}
				image={randomSong.album.images[1].url}
			/>
		);
		setNewCard(newCardElement);
	}

	return (
		<div>
			<h1>Random Page</h1>
			<h3>Click on Artist for a random song!</h3>
			<button onClick={getRandomSong}>change me</button>

			<button
				onClick={() => {
					window.open(newCardUrl);
				}}
			>
				open me
			</button>
			{newCard}
			<Cardstack onClick={getRandomSong} url={newCardUrl} />
		</div>
	);
};

export default Random;

/* 
	- If I want to find a random song, lets check to see if I can copy some of the search query code/functionality over to this Random component (or make it its own component)
	- I'll take the search and modify it to each specific artist and add the get track query
		- I can also try to just use their top tracks query instead of their entire database. Let's try that first and see how it goes
	- Create a Math.random function to grab a number from 1 - {number of tracks} (i'll need to have it look at the search results and pull that info)
	- Combine the search/math functions
		- Use the async/await method so I can pull the data first, then wait to show the data until after I get the result.
	- Console.log() the information before adding it to the card
	- Change the URL of the card to the external_url.spotify link for the track itself
*/
