import styled from 'styled-components';
import AddBookBg from '../../assets/images/AddBookBg.png';

export const BookWrapper = styled.div`
	display: flex;
`;

export const BookWrapperLeft = styled.div`
	width: 50%;
	background-color: ${(props) =>
		props.theme === 'dark' ? '#1B1B1B' : '#e5e5e5'};
`;

export const BookWrapperLabel = styled.label`
	width: 315px;
	height: 428px;
	position: absolute;
	left: 200px;
	top: 0;
	margin: 0 auto;
	margin-top: 136px;
	background-color: ${(props) =>
		props.theme === 'dark' ? '#4D4D4D' : '#F8F8F8'};
	border: 1px dashed rgba(0, 0, 0, 0.3);
	border-radius: 17px;
	background-image: url(${AddBookBg});
	background-repeat: no-repeat;
	background-position: center;
`;

export const BookWrapperDescription = styled.p`
	position: relative;
	bottom: -260px;
	width: 160px;
	margin: 0 auto;
	font-size: 12px;
	line-height: 18px;
	color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000000')};
	opacity: 0.3;
	text-align: center;
`;

export const BookWrapperLeftInput = styled.input`
	display: none;
`;

export const BookWrapperRight = styled.div`
	width: 50%;
	height: 100vh;
	padding-top: 48px;
	padding-left: 123px;
	padding-right: 123px;
	background: ${(props) => (props.theme === 'dark' ? '#191919' : '#fff')};
`;

export const BookWrapperTitle = styled.h2`
	font-weight: 600;
	font-size: 32px;
	line-height: 48px;
	color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
`;

export const BookWrapperForm = styled.form`
	display: flex;
	flex-direction: column;
`;
export const BookWrapperSelect = styled.select`
	margin-bottom: 12px;
	padding: 13px 0;
	padding-left: 22px;
	font-size: 14px;
	line-height: 21px;
	color: ${(props) => (props.theme === 'dark' ? '#fff' : '#aaa')};
	background: ${(props) => (props.theme === 'dark' ? 'transparent' : '#fff')};
	border: 1px solid #b4b4bb;
	border-radius: 10px;
	& > option {
		padding: 15px 0;
	}
`;
export const BookWrapperTextarea = styled.textarea`
	height: 82px;
	margin-bottom: 44px;
	padding: 13px 0;
	padding-left: 22px;
	font-size: 14px;
	line-height: 21px;
	color: #aaaaaa;
	background: ${(props) => (props.theme === 'dark' ? 'transparent' : '#fff')};
	border: 1px solid #b4b4bb;
	border-radius: 10px;
	resize: none;
`;

export const BookWrapperInput = styled.input`
	margin-bottom: 12px;
	padding: 13px 0;
	padding-left: 22px;
	font-size: 14px;
	line-height: 21px;
	color: #aaaaaa;
	background: ${(props) => (props.theme === 'dark' ? 'transparent' : '#fff')};
	border: 1px solid #b4b4bb;
	border-radius: 10px;
`;

export const BookBtn = styled.button`
	padding: 10px 0;
	font-weight: 500;
	font-size: 18px;
	line-height: 36px;
	text-align: center;
	color: ${(props) => (props.theme === 'dark' ? '#000' : '#fff')};
	background: ${(props) => (props.theme === 'dark' ? '#fff' : '#152540')};
	border-radius: 99px;
`;

export const AuthorOption = styled.option`
	display: inline-block;
	padding: 15px 0;
	background-color: grey;
`;
