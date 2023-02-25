import styled from 'styled-components';
import Arrow from '../../assets/images/icons/arrow-bottom.png';

export const SingleBookWrapper = styled.div`
	display: flex;
`;

export const SingleBookLeftWrapper = styled.div``;
export const SingleBookRightWrapper = styled.div`
	margin-left: 64px;
	padding-top: 50px;
`;
export const SingleBookTitle = styled.h3`
	margin-bottom: 12px;
	font-size: 48px;
	line-height: 72px;
	color: ${(props) => (props.theme === 'dark' ? '#C9AC8C' : '#d1b89d')};
`;
export const SingleBookList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;
export const SingleBookListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const SingleBookPages = styled.p`
	margin-bottom: 14px;
	font-size: 20px;
	line-height: 30px;
	color: ${(props) =>
		props.theme === 'dark' ? '#fff' : 'rgba(13, 13, 13, 0.6)'};
`;

export const SingleBookPagesCount = styled.p`
	font-size: 20px;
	line-height: 30px;
	color: ${(props) => (props.theme === 'dark' ? '#fff' : '#0d0d0d')};
`;

export const SingleBookArrow = styled.span`
	display: inline-block;
	position: relative;
	margin-bottom: 12px;
	line-height: 24px;
	color: #d1b89d;
	&::after {
		position: absolute;
		top: 11px;
		left: 120px;
		width: 520%;
		height: 3px;
		border-bottom: 1px solid
			${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
		content: '';
	}
`;

export const SingleBookDescription = styled.p`
	line-height: 150%;
	color: ${(props) =>
		props.theme === 'dark' ? '#fff' : 'rgba(13, 13, 13, 0.8)'};
`;
