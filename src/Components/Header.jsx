import {NavLink} from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<NavLink className='header-component' to='/'>
				<img id='header-logo' src='/spotify-logo.png' />
				<p>Spotify Showcase</p>
			</NavLink>
		</div>
	);
};

export default Header;
