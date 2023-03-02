import {NavLink} from 'react-router-dom';

const Header = () => {
	return (
		<div className='header-component'>
			<NavLink to='/'>
				<img id='header-logo' src='/spotify-logo.png' />
				Spotify Showcase
			</NavLink>
		</div>
	);
};

export default Header;
