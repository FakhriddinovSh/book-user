import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AuthorItemBgOne from '../../assets/images/AuthorItemBgOne.png';
import AuthorItemBgTwo from '../../assets/images/AuthorItemBgTwo.png';

import AuthorItemBgDarkOne from '../../assets/images/AuthorItemBgTwo.png';
import AuthorItemBgDarkTwo from '../../assets/images/AuthorItemBgTwo.png';

export const Item = styled.li`
	width: 295px;
	margin-top: 50px;
	background: ${(props) => (props.theme === 'dark' ? '#1E1E1E' : '#f5f5f5')};
	border-radius: 22px;
	list-style: none;
	background-image: url(${AuthorItemBgOne}), url(${AuthorItemBgTwo});
	background-repeat: no-repeat;
	background-position: bottom 30px right, bottom left;
`;

export const InnerLink = styled(NavLink)`
	text-decoration: none;
`;

export const ItemImage = styled.img`
	width: 100%;
	height: 224px;
	border-top-left-radius: 22px;
	border-top-right-radius: 22px;
`;

export const AuthorName = styled.h3`
	margin: 0;
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	color: ${(props) => (props.theme === 'dark' ? '#C9AC8C' : '#000000')};
`;

export const AuthorDeadDate = styled.p`
	margin: 0;
	line-height: 24px;
	color: ${(props) => (props.theme === 'dark' ? '#ffffff99' : '#00000099')};
`;

export const ItemInnerWrapper = styled.div`
	padding-top: 12px;
	padding-left: 16px;
	padding-bottom: 63px;
`;
