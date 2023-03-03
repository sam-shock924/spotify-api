import {Cardstack} from './Cardstack';

const Search = () => {
	return (
		<div>
			<h1>Search Page</h1>
			<div className='search-input'>
				<input type='search' placeholder='Search...' />
				<select name='default' id='select-options'>
					Search for...
					<option value='default'>Search for...</option>
					<option value='artist'>Artist</option>
					<option value='album'>Album</option>
					<option value='song'>Song</option>
				</select>
			</div>
			<Cardstack />
		</div>
	);
};

export default Search;
