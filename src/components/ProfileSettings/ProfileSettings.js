import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Languages } from '../../Languages/Languages';
import { addLanguage } from '../../redux/Language/LanguageActions';
import { addTheme } from '../../redux/Mode/modeActions';
import {
	CheckBox,
	CheckBoxLabel,
	CheckBoxWrapper,
	ProfileSettingsButton,
	ProfileSettingsForm,
	ProfileSettingsInner,
	ProfileSettingsOption,
	ProfileSettingsSelect,
	ProfileSettingsTheme,
	ProfileSettingsTitle,
	ProfileSettingsWrapper,
} from './ProfileSettings.styled';

export const ProfileSettings = ({ setTheme, setLang }) => {
	const language_value = useRef();
	const [checked, setChecked] = useState('light');
	const dispatch = useDispatch();

	const state = useSelector((state) => state);

	const theme = state.mode.theme;
	const lang = state.language.language;

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		setLang(language_value.current.value);
		localStorage.setItem('language', language_value.current.value);
		setTheme(checked);
		localStorage.setItem('mode', checked);
		dispatch(addTheme(localStorage.getItem('mode')));
		dispatch(addLanguage(localStorage.getItem('language')));
	};

	const handleCheckInput = (e) => {
		let isChecked = e.target?.checked;

		if (isChecked === false) {
			setChecked('light');
		} else {
			setChecked('dark');
		}
	};

	return (
		<ProfileSettingsWrapper theme={theme}>
			<ProfileSettingsInner>
				<ProfileSettingsTitle theme={theme}>
					{Languages[lang].userSettings.title}
				</ProfileSettingsTitle>
				<ProfileSettingsForm onSubmit={handleFormSubmit}>
					<ProfileSettingsTheme theme={theme}>
						{Languages[lang].userSettings.label}
					</ProfileSettingsTheme>

					<ProfileSettingsSelect ref={language_value}>
						<ProfileSettingsOption defaultValue value="en">
							English
						</ProfileSettingsOption>
						<ProfileSettingsOption value="uz">
							Uzbek
						</ProfileSettingsOption>
						<ProfileSettingsOption value="ru">
							Russian
						</ProfileSettingsOption>
					</ProfileSettingsSelect>
					<ProfileSettingsTheme theme={theme}>
						{Languages[lang].userSettings.theme}
					</ProfileSettingsTheme>
					<CheckBoxWrapper>
						<CheckBox
							id="checkbox"
							type="checkbox"
							onChange={(e) => handleCheckInput(e)}
						/>
						<CheckBoxLabel htmlFor="checkbox" />
					</CheckBoxWrapper>
					<ProfileSettingsButton type="submit" theme={theme}>
						{Languages[lang].profile.button}
					</ProfileSettingsButton>
				</ProfileSettingsForm>
			</ProfileSettingsInner>
		</ProfileSettingsWrapper>
	);
};
