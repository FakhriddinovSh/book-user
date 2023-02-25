import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ProfileTop = styled.div``;
export const ProfilTopWrapper = styled.div``;
export const ProfilTopList = styled.ul`
	display: flex;
	align-items: center;
	margin: 0;
	padding: 0;
	list-style: none;
`;
export const ProfilTopListItem = styled.li`
	width: 33%;
	position: relative;
	padding-top: 22px;
	padding-bottom: 22px;
	padding-left: 23px;
	background: ${(props) => (props.isactive === true ? '#DDE6F5' : '#f3f6f9')};
	border-radius: 4px 4px 0px 0px;
	&::before {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		content: '1';
		width: 35px;
		height: 35px;
		font-weight: 600;
		line-height: 24px;
		color: ${(props) => (props.isactive === true ? '#fff' : '#3699ff')};
		background: ${(props) =>
			props.isactive === true ? '#152540' : '#e5eaee'};
		border-radius: 4px;
	}
	&:nth-child(2)::before {
		content: '2';
		color: ${(props) => (props.isactive === true ? '#fff' : '#3699ff')};
		background: ${(props) =>
			props.isactive === true ? '#152540' : '#e5eaee'};
	}
	&:last-child:before {
		content: '3';
		color: ${(props) => (props.isactive === true ? '#fff' : '#3699ff')};
		background: ${(props) =>
			props.isactive === true ? '#152540' : '#e5eaee'};
	}
`;

export const ProfileTopLink = styled(NavLink)`
	display: inline-block;
	margin-left: 50px;
	margin-top: 7px;
	font-weight: 600;
	font-size: 14px;
	line-height: 21px;
	color: ${(props) => (props.isactive === true ? '#152540' : '#464e5f')};
	text-decoration: none;
`;
