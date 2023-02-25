import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ProfileWrapper = styled.div`
	position: absolute;
	z-index: 1;
	top: 120%;
	right: -20px;
	display: ${(props) => (props.profile === true ? 'flex' : 'none')};
	flex-direction: column;
	width: 180px;
	padding-left: 24px;
	padding-right: 24px;
	padding-bottom: 8px;
	padding-top: 8px;
	background: #f5f5f5;
	border-radius: 10px;
`;

export const ProfileLink = styled(NavLink)`
	display: inline-block;
	padding: 8px 0;
	font-weight: 500;
	line-height: 24px;
	color: #000000;
	text-decoration: none;
	text-align: left;
`;

export const ProfileButton = styled.button`
	padding-left: 0;
	font-weight: 500;
	line-height: 24px;
	color: #000000;
	border: none;
	background-color: transparent;
	text-align: left;
`;
