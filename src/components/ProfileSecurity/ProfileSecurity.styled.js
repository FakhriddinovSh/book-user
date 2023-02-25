import styled from 'styled-components';

export const ProfileSecurityWrapper = styled.div`
	width: 100%;
	height: 89.9vh;
	padding-top: 68px;
	background-color: ${(props) =>
		props.theme === 'dark' ? '#191919' : '#fff'};
`;

export const ProfileSecurityInner = styled.div`
	position: relative;
	width: 708px;
	margin: 0 auto;
`;

export const ProfileTitle = styled.h2`
	margin-bottom: 32px;
	font-weight: 700;
	font-size: 18px;
	line-height: 27px;
	color: ${(props) => (props.theme === 'dark' ? '#fff' : '#212121')};
`;

export const ProfileSecurityForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
export const ProfileSecurityLabel = styled.label`
	margin-bottom: 43px;
	font-size: 13px;
	line-height: 20px;
	color: #464e5f;
`;
export const ProfileSecurityInput = styled.input`
	width: 100%;
	padding: 12px 0;
	padding-left: 20px;
	font-size: 14px;
	line-height: 21px;
	background: #f3f6f9;
	border-radius: 4px;
	border: none;
`;

export const ProfileSecurityDesc = styled.p`
	margin-bottom: 7px;
	color: ${(props) => (props.theme === 'dark' ? '#fff' : '#464e5f')};
`;

export const ProfileSecurityButton = styled.button`
	position: absolute;
	right: 0;
	bottom: -80px;
	padding: 12px 20px;
	font-weight: 600;
	font-size: 13px;
	line-height: 20px;
	color: ${(props) => (props.theme === 'dark' ? '#0D0D0D' : '#ffffff')};
	background: ${(props) => (props.theme === 'dark' ? '#fff' : '#152540')};
	border-radius: 4px;
`;
