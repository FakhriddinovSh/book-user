import axios from 'axios';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Languages } from '../../Languages/Languages';
import {
	ProfileSecurityButton,
	ProfileSecurityDesc,
	ProfileSecurityForm,
	ProfileSecurityInner,
	ProfileSecurityInput,
	ProfileSecurityLabel,
	ProfileSecurityWrapper,
	ProfileTitle,
} from './ProfileSecurity.styled';

export const ProfileSecurity = () => {
	const user_email = useRef();
	const current_password = useRef();
	const new_password = useRef();
	const state = useSelector((state) => state);

	const theme = state.mode.theme;
	const lang = state.language.language;

	const handleSubmitForm = (evt) => {
		evt.preventDefault();

		axios
			.put(
				'https://book-bekend.onrender.com/user/security',
				{
					email: user_email.current.value,
					currentPassword: String(current_password.current.value),
					newPassword: String(new_password.current.value),
				},
				{
					headers: {
						Authorization: state.token.token,
					},
				},
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<ProfileSecurityWrapper theme={theme}>
			<ProfileSecurityInner>
				<ProfileTitle theme={theme}>
					{Languages[lang].profileSecurity.title}
				</ProfileTitle>
				<ProfileSecurityForm onSubmit={handleSubmitForm}>
					<ProfileSecurityLabel>
						<ProfileSecurityDesc theme={theme}>
							{Languages[lang].profileSecurity.email}
						</ProfileSecurityDesc>
						<ProfileSecurityInput
							ref={user_email}
							type="email"
							placeholder={Languages[lang].profileSecurity.email}
						/>
					</ProfileSecurityLabel>
					<ProfileSecurityLabel>
						<ProfileSecurityDesc theme={theme}>
							{Languages[lang].profileSecurity.currentPassword}
						</ProfileSecurityDesc>
						<ProfileSecurityInput
							ref={current_password}
							type="password"
							placeholder={
								Languages[lang].profileSecurity.currentPassword
							}
						/>
					</ProfileSecurityLabel>
					<ProfileSecurityLabel>
						<ProfileSecurityDesc theme={theme}>
							{Languages[lang].profileSecurity.newPassword}
						</ProfileSecurityDesc>
						<ProfileSecurityInput
							ref={new_password}
							type="password"
							placeholder={
								Languages[lang].profileSecurity.newPassword
							}
						/>
					</ProfileSecurityLabel>

					<ProfileSecurityButton type="submit" theme={theme}>
						{Languages[lang].profile.button}
					</ProfileSecurityButton>
				</ProfileSecurityForm>
			</ProfileSecurityInner>
		</ProfileSecurityWrapper>
	);
};
