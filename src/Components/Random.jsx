// import {Cardstack} from './Cardstack';
// import ArtistCard from './Card';
// import {useState, useEffect} from 'react';
// import axios from 'axios';

// const Random = () => {
// 	const clientId = '974646a87ae344318fc25237004b3b81';
// 	const clientSecret = 'aaad82d9a61d4a6a9c8bbbc6a8da63ef';
// 	const [token, setToken] = useState('');
// 	const [newCardUrl, setNewCardUrl] = useState('');
// 	const [newCard, setNewCard] = useState(<></>);
// 	const [artistId, setArtistId] = useState([]);

// 	const artistInfo = [
// 		{
// 			name: 'Real Friends',
// 			id: '6dEtLwgmSI0hmfwTSjy8cw',
// 		},
// 		{
// 			name: 'Neck Deep',
// 			id: '2TM0qnbJH4QPhGMCdPt7fH',
// 		},
// 		{
// 			name: 'Blink-182',
// 			id: '6FBDaR13swtiWwGhX1WQsP',
// 		},
// 		{
// 			name: 'Grayscale',
// 			id: '6Xq9CIMYWK4RCrMVtfEOM0',
// 		},
// 		{
// 			name: 'Magnolia Park',
// 			id: '7B76SsfzG0wWk1WEvGzCmY',
// 		},
// 		{
// 			name: 'Between You and Me',
// 			id: '1P1y4wp6V0CwjhGcXPKgAu',
// 		},
// 	];

// 	const mapArtistButtons = artistInfo.map((artist) => {
// 		useEffect(() => {
// 			setArtistId(artist.id);
// 			console.log(artist.id);
// 		}, []);

// 		return (
// 			<>
// 				<button key={artist.id} onClick={getRandomSong}>
// 					{artist.name}
// 				</button>
// 			</>
// 		);
// 	});

// 	useEffect(() => {
// 		let tokenParams = {
// 			method: 'POST',
// 			url: 'https://accounts.spotify.com/api/token',
// 			headers: {
// 				'Content-Type': 'application/x-www-form-urlencoded',
// 			},
// 			data: new URLSearchParams({
// 				grant_type: 'client_credentials',
// 				client_id: clientId,
// 				client_secret: clientSecret,
// 			}),
// 		};
// 		async function getToken() {
// 			const fetchTokenCall = await axios(tokenParams).then((res) =>
// 				setToken(res.data.access_token)
// 			);
// 		}
// 		getToken();
// 	}, []);

// 	let searchParams = {
// 		method: 'GET',
// 		url: `https://api.spotify.com/v1/artists/${artistId}/top-tracks`,
// 		headers: {
// 			Authorization: `Bearer ${token}`,
// 		},
// 		params: {
// 			market: 'US',
// 		},
// 	};

// 	async function getRandomSong() {
// 		const tracks = await axios(searchParams).then((res) => res.data.tracks);
// 		const index = Math.floor(Math.random() * tracks.length);
// 		const randomSong = tracks[index];
// 		setNewCardUrl(randomSong.external_urls.spotify);
// 		console.log(randomSong);
// 		console.log(newCardUrl);
// 		const newCardElement = (
// 			<ArtistCard
// 				title={randomSong.name}
// 				subtitle={randomSong.album.name}
// 				url={newCardUrl}
// 				image={randomSong.album.images[1].url}
// 			/>
// 		);
// 		setNewCard(newCardElement);
// 	}

// 	return (
// 		<div>
// 			<h1>Random Page</h1>
// 			<h3>Click on Artist for a random song!</h3>
// 			{mapArtistButtons}

// 			<button onClick={getRandomSong}>Randomize me captain!</button>
// 			{newCard}
// 			{/* <Cardstack onClick={getRandomSong} url={newCardUrl} /> */}
// 		</div>
// 	);
// };

// export default Random;

import {useState, useEffect} from 'react';
import axios from 'axios';
import ArtistCard from './Card';

const Random = () => {
	const clientId = '974646a87ae344318fc25237004b3b81';
	const clientSecret = 'aaad82d9a61d4a6a9c8bbbc6a8da63ef';
	const [token, setToken] = useState('');
	const [newCard, setNewCard] = useState(<></>);

	const artistInfo = [
		{
			name: 'Real Friends',
			id: '6dEtLwgmSI0hmfwTSjy8cw',
		},
		{
			name: 'Neck Deep',
			id: '2TM0qnbJH4QPhGMCdPt7fH',
		},
		{
			name: 'Blink-182',
			id: '6FBDaR13swtiWwGhX1WQsP',
		},
		{
			name: 'Grayscale',
			id: '6Xq9CIMYWK4RCrMVtfEOM0',
		},
		{
			name: 'Magnolia Park',
			id: '7B76SsfzG0wWk1WEvGzCmY',
		},
		{
			name: 'Between You and Me',
			id: '1P1y4wp6V0CwjhGcXPKgAu',
		},
	];

	useEffect(() => {
		async function getToken() {
			const tokenParams = {
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
			const response = await axios(tokenParams);
			setToken(response.data.access_token);
		}
		getToken();
	}, []);

	async function getRandomSong(artistId) {
		const searchParams = {
			method: 'GET',
			url: `https://api.spotify.com/v1/artists/${artistId}/top-tracks`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: {
				market: 'US',
			},
		};
		const response = await axios(searchParams);
		const tracks = response.data.tracks;
		const index = Math.floor(Math.random() * tracks.length);
		const randomSong = tracks[index];
		const newCardElement = (
			<ArtistCard
				title={randomSong.name}
				subtitle={randomSong.album.name}
				url={randomSong.external_urls.spotify}
				image={randomSong.album.images[1].url}
			/>
		);
		setNewCard(newCardElement);
	}

	const mapArtistButtons = artistInfo.map((artist) => (
		<button key={artist.id} onClick={() => getRandomSong(artist.id)}>
			{artist.name}
		</button>
	));

	return (
		<div>
			<h1>Random Page</h1>
			<h3>Click on Artist for a random song!</h3>
			{mapArtistButtons}

			{newCard}
		</div>
	);
};

export default Random;
