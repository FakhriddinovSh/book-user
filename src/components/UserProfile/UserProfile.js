import styled from 'styled-components';
import {
	ProfileButton,
	ProfileLink,
	ProfileWrapper,
} from './UserProfile.styled';
import HomeIcon from '../../assets/images/icons/HomeIcon.svg';
import { Languages } from '../../Languages/Languages';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../../redux/token/tokenAction';

export const UserProfile = ({ profile }) => {
	const dispatch = useDispatch();

	const state = useSelector((state) => state);

	const lang = state.language.language;

	return (
		<ProfileWrapper profile={profile}>
			<ProfileLink to="/profile/main">
				{Languages[lang]?.dropdown?.first}
			</ProfileLink>
			<ProfileLink to="/addauthor">
				{Languages[lang]?.dropdown?.second}
			</ProfileLink>
			<ProfileLink to="/addbook">
				{Languages[lang]?.dropdown?.third}
			</ProfileLink>
			<ProfileButton
				onClick={() => {
					dispatch(deleteToken());
				}}
			>
				{Languages[lang]?.dropdown?.fourth}
			</ProfileButton>
		</ProfileWrapper>
	);
};

export const HomeAvatar = styled.button`
	position: relative;
	text-decoration: none;
	border: none;
	border-radius: 50px;
	width: 44px;
	height: 44px;
	background-color: grey;
	background-position: center;
	&::after {
		position: absolute;
		right: -22px;
		top: 40%;
		content: '';
		width: 11px;
		height: 7px;
		background-image: url(${HomeIcon});
		background-repeat: no-repeat;
		background-size: contain;
	}
`;
