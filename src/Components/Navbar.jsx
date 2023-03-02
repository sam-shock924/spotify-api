import {NavLink} from 'react-router-dom';
import Header from './Header';

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<Header />
			<NavLink to='/search'>Search</NavLink>
			<NavLink to='/random'>Random</NavLink>
		</div>
	);
};

export default Navbar;
