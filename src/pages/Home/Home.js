import React, { useEffect, useState } from 'react';
import {
	HomeAvatar,
	UserProfile,
} from '../../components/UserProfile/UserProfile';
import {
	Container,
	Header,
	HomeBackground,
	HomeWrapper,
	List,
	ListItem,
	ListItemLink,
	LogoLink,
	Nav,
	UserImage,
} from './Home.styled';
import { Languages } from '../../Languages/Languages';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { SingleAuthor } from '../SingleAuthor/SingleAuthor';
import { AllAuthors } from '../../components/AllAuthors/AllAuthors';
import { Books } from '../Books/Books';
import { SingleBook } from '../SingleBook/SingleBook';
import { useSelector } from 'react-redux';

export const Home = () => {
	const [profile, setProfile] = useState(false);

	const [me, setMe] = useState([]);
	const state = useSelector((state) => state);
	const theme = state.mode.theme;
	const lang = state.language.language;

	useEffect(() => {
		axios
			.get('https://book-bekend-production.up.railway.app/user/me', {
				headers: {
					Authorization: state.token.token,
				},
			})
			.then((res) => setMe(res.data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<HomeBackground theme={theme}>
			<Header>
				<Container>
					<HomeWrapper justify>
						<LogoLink to={'/1'} theme={theme}>
							{Languages[lang]?.home?.logo}
						</LogoLink>

						<HomeWrapper>
							<Nav>
								<List>
									<ListItem>
										<ListItemLink to={'1'} theme={theme}>
											{Languages[lang]?.home?.linkOne}
										</ListItemLink>
									</ListItem>
									<ListItem>
										<ListItemLink
											to="books/1"
											theme={theme}
										>
											{Languages[lang]?.home?.linkTwo}
										</ListItemLink>
									</ListItem>
								</List>
							</Nav>
							<HomeAvatar onClick={() => setProfile(!profile)}>
								{!me.image ? (
									me?.first_name?.charAt(0) +
									me?.last_name?.charAt(0)
								) : (
									<UserImage
										src={`https://book-bekend-production.up.railway.app/${me?.image}`}
									/>
								)}

								<UserProfile
									profile={profile}
									lang={lang}
								></UserProfile>
							</HomeAvatar>
						</HomeWrapper>
					</HomeWrapper>
				</Container>
			</Header>

			<Routes>
				<Route
					path={'/'}
					element={<AllAuthors theme={theme} lang={lang} />}
				/>
				<Route
					path={'/:id'}
					element={<AllAuthors theme={theme} lang={lang} />}
				/>
				<Route
					path={'/singleAuthor/:id'}
					element={<SingleAuthor theme={theme} lang={lang} />}
				/>
				<Route
					path="/books"
					element={<Books theme={theme} lang={lang} />}
				/>
				<Route
					path="/books/:id"
					element={<Books theme={theme} lang={lang} />}
				/>
				<Route
					path="/singleBook/:id"
					element={<SingleBook theme={theme} />}
				/>
				<Route
					path="/singleBook"
					element={<SingleBook theme={theme} />}
				/>
			</Routes>
		</HomeBackground>
	);
};
