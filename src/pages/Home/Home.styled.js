import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HomeBackground = styled.div`
	background-color: ${(props) =>
		props.theme === 'dark' ? '#191919' : '#fff'};
	height: 100%;
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	padding: 0 20px;
	margin: 0 auto;
`;

export const Header = styled.header`
	padding: 27px 0;
`;

export const HomeWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.justify ? 'space-between' : '')};
`;

export const LogoLink = styled(NavLink)`
	font-size: 25px;
	line-height: 38px;
	color: #d1b89d;
	text-decoration: none;
`;

export const Nav = styled.nav``;
export const List = styled.ul`
	display: flex;
	align-items: center;
	margin: 0;
	padding: 0;
	list-style: none;
`;
export const ListItem = styled.li`
	margin-right: 42px;
`;

export const ListItemLink = styled(NavLink)`
	line-height: 144.4%;
	/* color: ${(props) => (props.theme === 'dark' ? '#fff' : '#0d0d0d')}; */
	text-decoration: none;
	opacity: 0.5;
`;

export const UserImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 49px;
	height: 49px;
	border-radius: 50px;
`;
