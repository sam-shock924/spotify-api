import {NavLink, Outlet} from 'react-router-dom';
import Header from './Header';

const Navbar = () => {
	return (
		<div className='root-layout'>
			<div className='navbar-container'>
				<Header />
				<NavLink to='/search'>Search</NavLink>
				<NavLink to='/random'>Random</NavLink>
			</div>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Navbar;
