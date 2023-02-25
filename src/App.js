import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.styled.js';
import { GlobalStyled } from './App.styled.js';
import { AddAuthor } from './pages/AddAuthor/AddAuthor.js';
import { AddBook } from './pages/AddBook/AddBook.js';
import { Home } from './pages/Home/Home.js';
import { Login } from './pages/Login/Login.js';
import { Profile } from './pages/Profile/Profile.js';
import { Register } from './pages/Register/Register';

export const App = () => {
	const state = useSelector((state) => state);
	const [theme, setTheme] = useState(state.mode.theme || 'light');
	const [til, setLanguage] = useState(state.language.language || 'en');

	return (
		<>
			<GlobalStyled />
			<Routes>
				<Route
					path="/*"
					element={state.token.token ? <Home /> : <Login />}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/addBook" element={<AddBook />} />

				<Route path="/addAuthor" element={<AddAuthor />} />
				<Route
					path="/profile/*"
					element={
						<Profile setTheme={setTheme} setLang={setLanguage} />
					}
				/>
			</Routes>
		</>
	);
};
