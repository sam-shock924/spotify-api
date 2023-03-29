import axios from 'axios';
import {useEffect, useState} from 'react';
import Output from './Output';

const Search = () => {
	const artistEndpoint = `https://api.spotify.com/v1/search?query=real+friends&type=artist&limit=5`;
	const tokenEndpoint = 'https://accounts.spotify.com/api/token';
	const clientId = '974646a87ae344318fc25237004b3b81';
	const clientSecret = 'aaad82d9a61d4a6a9c8bbbc6a8da63ef';
	// const redirectURI = 'spotify-showcase-project://callback';

	const [token, setToken] = useState('');
	const [artistList, setArtistList] = useState([]);

	useEffect(() => {
		let tokenParams = {
			method: 'POST',
			url: tokenEndpoint,
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
		url: artistEndpoint,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	async function searchRequest() {
		const searchArtist = await axios(searchParams).then((res) => {
			const artistString = res.data.artists.items;
			setArtistList(artistString);
			console.log(artistString);
		});
	}

	const handleClick = () => {
		searchRequest();
		// console.log(token);
	};

	return (
		<div>
			<h1>Search Page</h1>
			<div className='search-input'>
				<input id='search-value' type='search' placeholder='Search...' />
				<select name='default' id='select-options'>
					Search for...
					<option value='default'>Search for...</option>
					<option value='artist'>Artist</option>
					<option value='album'>Album</option>
					<option value='song'>Song</option>
				</select>
				<button onClick={handleClick} type='submit'>
					Search
				</button>
			</div>
			<Output artistList={artistList} />
		</div>
	);
};

export default Search;
