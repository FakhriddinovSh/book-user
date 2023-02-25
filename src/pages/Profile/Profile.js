import React, { useState } from 'react';
import {
	ProfileTop,
	ProfileTopLink,
	ProfilTopList,
	ProfilTopListItem,
	ProfilTopWrapper,
} from './Profil.styled';
import { Languages } from '../../Languages/Languages';
import { ProfileChange } from '../../components/ProfileChange/ProfileChange';
import { Route, Routes } from 'react-router-dom';
import { ProfileSecurity } from '../../components/ProfileSecurity/ProfileSecurity';
import { ProfileSettings } from '../../components/ProfileSettings/ProfileSettings';
import { useSelector } from 'react-redux';

export const Profile = ({ setTheme, setLang }) => {
	const [linkOne, setLinkOne] = useState(true);
	const [linkTwo, setLinkTwo] = useState(false);
	const [linkThree, setLinkThree] = useState(false);

	const state = useSelector((state) => state);
	const theme = state.mode.theme;
	const lang = state.language.language;

	return (
		<ProfileTop>
			<ProfilTopWrapper>
				<ProfilTopList>
					<ProfilTopListItem isactive={linkOne}>
						<ProfileTopLink
							to={'/profile/main'}
							onClick={() => {
								setLinkOne(!linkOne);
								if (linkTwo) {
									setLinkTwo(false);
								} else if (linkThree) {
									setLinkThree(false);
								}
							}}
							isactive={linkOne}
						>
							{Languages[lang].profile.profile}
						</ProfileTopLink>
					</ProfilTopListItem>
					<ProfilTopListItem isactive={linkTwo}>
						<ProfileTopLink
							to={'/profile/security'}
							onClick={() => {
								setLinkTwo(!linkTwo);
								if (linkOne) {
									setLinkOne(false);
								} else if (linkThree) {
									setLinkThree(false);
								}
							}}
							isactive={linkTwo}
						>
							{Languages[lang].profile.security}
						</ProfileTopLink>
					</ProfilTopListItem>
					<ProfilTopListItem isactive={linkThree}>
						<ProfileTopLink
							to={'/profile/settings'}
							onClick={() => {
								setLinkThree(!linkThree);
								if (linkOne) {
									setLinkOne(false);
								} else if (linkTwo) {
									setLinkTwo(false);
								}
							}}
							isactive={linkThree}
						>
							{Languages[lang].profile.settings}
						</ProfileTopLink>
					</ProfilTopListItem>
				</ProfilTopList>
			</ProfilTopWrapper>

			<Routes>
				<Route
					path="main"
					element={<ProfileChange lang={lang} theme={theme} />}
				/>
				<Route
					path="security"
					element={<ProfileSecurity lang={lang} theme={theme} />}
				/>
				<Route
					path="settings"
					element={
						<ProfileSettings
							lang={lang}
							setTheme={setTheme}
							theme={theme}
							setLang={setLang}
						/>
					}
				/>
			</Routes>
		</ProfileTop>
	);
};
