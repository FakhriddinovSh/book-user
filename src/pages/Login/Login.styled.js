import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LoginBackground from '../../assets/images/login-background.png';

export const RegisterWrapper = styled.div`
	display: flex;
`;

export const RegisterLeftWrapper = styled.div`
	width: 50%;
	height: 100vh;
	background-color: ${(props) => (props.dark ? '#000' : '#c9ac8ced')};
	background-image: url(${LoginBackground});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 600px;
`;

export const RegisterRightWrapper = styled.div`
	width: 50%;
	height: 100vh;
	padding-top: 191px;
	padding-right: 134px;
	padding-bottom: 136px;
	padding-left: 112px;
	background-color: ${(props) =>
		props.theme === 'dark' ? '#191919' : '#fff'};
`;

export const RegisterTitle = styled.h2`
	margin: 0;
	margin-bottom: 10px;
	font-weight: 600;
	font-size: 36px;
	line-height: 51px;
	color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
`;

export const RegisterDescription = styled.p`
	margin: 0;
	font-size: 13px;
	line-height: 15px;
	color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
`;

export const RegisterDescriptionLink = styled(NavLink)`
	margin: 0;
	margin-left: 10px;
	font-size: 13px;
	line-height: 15px;
	color: #549ff9;
	text-decoration: none;
`;

export const RegisterForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const RegisterInput = styled.input`
	margin-top: ${(props) => (props.top ? '21px' : '')};
	margin-bottom: ${(props) => (props.bottom ? '34px' : '16px')};
	padding: 16px 0;
	padding-left: 16px;
	font-size: 14px;
	line-height: 16px;
	color: #aaaaaa;
	background: ${(props) => (props.theme === 'dark' ? 'transparent' : '#fff')};
	border: 1px solid #b4b4bb;
	border-radius: 10px;
`;

export const RegisterButton = styled.button`
	padding: 10px 0;
	font-weight: 700;
	font-size: 18px;
	line-height: 36px;
	text-align: center;
	color: ${(props) => (props.theme === 'dark' ? '#000' : '#fff')};
	background: ${(props) => (props.theme === 'dark' ? '#fff' : '#152540')};
	border-radius: 99px;
`;
