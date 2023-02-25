import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SingleAuthorInner = styled.div`
	display: flex;
`;

export const SingleAuthorRight = styled.div`
	margin-left: 64px;
`;

export const SingleAuthorTitle = styled.h3`
	margin: 0;
	margin-bottom: 8px;
	font-size: 48px;
	line-height: 72px;
	color: #d1b89d;
`;

export const SingleAuthorDesc = styled.p`
	line-height: 24px;
	color: ${(props) =>
		props.theme === 'dark' ? '#fff' : 'rgba(13, 13, 13, 0.8)'};
	opacity: 0.8;
`;

export const SingleAuthorBottomWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 44px;
`;

export const SingleAuthorBottomLeftSpan = styled.span``;
export const SingleAuthorBottomLeftBirthDate = styled.p`
	margin: 0;
	padding: 0;
	font-size: 12px;
	line-height: 18px;
	font-weight: 600;
	color: ${(props) =>
		props.theme === 'dark' ? '#fff' : 'rgba(13, 13, 13, 0.6)'};
	opacity: 0.6;
`;

export const SingleAuthorYear = styled.p`
	margin: 0;
	font-size: 39px;
	line-height: 144.4%;
	color: #d1b89d;
`;

export const SingleAuthorArrow = styled.p`
	margin: 0 1rem;
	font-size: 39px;
	line-height: 144.4%;
	color: #d1b89d;
`;

export const SingleAuthorCarousel = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 100px;
`;

export const SingleAuthorCarouselTextOne = styled.p`
	font-size: 31px;
	line-height: 46px;
	text-align: center;
	color: #d1b89d;
`;
export const SingleAuthorCarouselTextTwo = styled(NavLink)`
	line-height: 24px;
	text-decoration: none;
	text-align: center;
	color: ${(props) => (props.theme === 'dark' ? '#fff' : '#0d0d0d')};
`;

export const SingleAuthorList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0;
	padding-bottom: 20px;
	overflow-x: scroll;
	list-style: none;
`;

export const SingleAuthorListItem = styled.li`
	width: 190px;
`;

export const SingleAuthorListImage = styled.img``;
export const SingleAuthorListTitle = styled.h3`
	margin: 0;
	margin-top: 12px;
	margin-bottom: 6px;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000000')};
`;
export const SingleAuthorListName = styled.p`
	margin: 0;
	line-height: 24px;
	color: ${(props) =>
		props.theme === 'dark' ? '#fff' : 'rgba(13, 13, 13, 0.6)'};
`;

export const SingleAuthorWrapperDiv = styled.div``;
