import axios from 'axios';
import {useEffect, useState} from 'react';
import Output from './Output';

const Search = () => {
	const clientId = '974646a87ae344318fc25237004b3b81';
	const clientSecret = 'aaad82d9a61d4a6a9c8bbbc6a8da63ef';

	const [token, setToken] = useState('');
	const [queryList, setQueryList] = useState([]);
	const [queryType, setQueryType] = useState('');
	const [query, setQuery] = useState('');

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
		url: `https://api.spotify.com/v1/search?query=${query}&type=${queryType}&limit=5`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	async function searchRequest() {
		const searchQuery = await axios(searchParams).then((res) => {
			const queryString = res.data[queryType + 's'].items;
			setQueryList(queryString);
			console.log(queryString);
		});
	}

	const handleQueryType = (e) => {
		setQueryType(e.target.value);
	};

	const handleQuery = (e) => {
		if (queryType !== 'placeholder') {
			setQuery(e.target.value);
			console.log(queryType);
		}
	};

	const handleClick = (e) => {
		e.preventDefault();
		searchRequest();
		console.log(query);
		//fix later: clear search field on submit
	};

	return (
		<div>
			<h1>Search Page</h1>
			<form className='search-input'>
				<input
					id='search-value'
					type='text'
					value={query}
					onChange={handleQuery}
					placeholder='Search...'
				/>
				<select
					value={queryType}
					onChange={handleQueryType}
					name='default'
					id='select-options'
				>
					Search for...
					<option value='placeholder'>Search for...</option>
					<option value='artist'>Artist</option>
					<option value='album'>Album</option>
					<option value='track'>Song</option>
				</select>
				<button onClick={handleClick} type='submit'>
					Search
				</button>
			</form>
			<Output queryList={queryList} />
		</div>
	);
};

export default Search;
