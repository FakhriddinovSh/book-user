import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '../../assets/images/icons/search-icon.png';

export const SearchWrapper = styled.div`
	position: absolute;
	top: 420px;
	width: 1030px;
	margin: 0 auto;
	right: 0;
	left: 0;
	padding: 29px 73px;
	background: ${(props) => (props.theme === 'dark' ? '#191919' : '#fff')};
	box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
	border-radius: 15px;
`;
export const SearchTitle = styled.h3`
	font-size: 32px;
	line-height: 48px;
	color: ${(props) => (props.theme === 'dark' ? '#C9AC8C' : ' #d1b89d')};
	text-align: center;
`;
export const SearchForm = styled.form``;
export const SearchInput = styled.input`
	width: 700px;
	margin-right: 14px;
	padding: 12px;
	padding-left: 27px;
	line-height: 24px;
	color: ${(props) =>
		props.theme === 'dark' ? '#fff' : 'rgba(13, 13, 13, 0.3)'};
	background: ${(props) => (props.theme === 'dark' ? '#404040' : '#f5f5f5')};
	border-radius: 15px;
	border: none;
`;

export const SearchButton = styled.button`
	position: relative;
	padding: 12px 0;
	padding-left: 72px;
	padding-right: 42px;
	line-height: 24px;
	color: ${(props) => (props.theme === 'dark' ? '#3C2710' : '#efdac3')};
	background: #c9ac8c;
	border: none;
	border-radius: 15px;
	&::before {
		position: absolute;
		left: 40px;
		width: 24px;
		height: 24px;
		background-image: url(${SearchIcon});
		background-repeat: no-repeat;
		content: '';
	}
`;

export const AllAuthorsList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 0;
	margin: 0;
`;

export const AllAuthorsWrapper = styled.div`
	margin-top: 180px;
`;

export const AllAuthorsDesc = styled.p`
	font-size: 32px;
	line-height: 48px;
	text-align: center;
	color: #c9ac8c;
`;

export const AllAuthorsGenre = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const AllAuthorsGenreItem = styled.li`
	margin-right: 54px;
	&:last-child {
		margin-right: 0;
	}
`;
export const AllAuthorsGenreLink = styled(NavLink)`
	font-size: 18px;
	line-height: 27px;
	color: ${(props) =>
		props.theme === 'dark' ? '#fff' : 'rgba(13, 13, 13, 0.6)'};
	text-decoration: none;
`;
