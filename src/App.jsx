import './App.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

//pages and components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Search from './Components/Search';
import Random from './Components/Random';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Navbar />}>
			<Route index element={<Home />} />
			<Route path='search' element={<Search />} />
			<Route path='random' element={<Random />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
