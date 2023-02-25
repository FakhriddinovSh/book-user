import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
	margin-bottom: 100px;
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
	margin-bottom: 30px;
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
