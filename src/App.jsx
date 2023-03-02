import './App.css';
// import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Search from './Components/Search';
import Random from './Components/Random';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<header>
				{/* <Header /> */}
				<Navbar />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='search' element={<Search />}></Route>
					<Route path='random' element={<Random />}></Route>
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
