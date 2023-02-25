import styled from 'styled-components';

export const ProfileSettingsWrapper = styled.div`
	width: 100%;
	height: 90vh;
	padding-top: 140px;
	background-color: ${(props) => (props.theme === 'dark' ? '#000' : '#fff')};
`;

export const ProfileSettingsInner = styled.div`
	position: relative;
	width: 708px;
	margin: 0 auto;
	/* &::after {
		position: absolute;
		bottom: -40px;
		content: '';
		width: 100%;
		height: 2px;
		border-top: 1px solid #000;
	} */
`;

export const ProfileSettingsTitle = styled.h2`
	margin-bottom: 32px;
	font-weight: 700;
	font-size: 18px;
	line-height: 27px;
	color: ${(props) => (props.theme === 'dark' ? '#fff' : '#212121')};
`;

export const ProfileSettingsForm = styled.form``;
export const ProfileSettingsSelect = styled.select`
	width: 100%;
	margin-bottom: 31px;
	padding: 12px 0;
	padding-left: 20px;
	font-size: 14px;
	line-height: 21px;
	color: #464e5f;
	background: #f3f6f9;
	border-radius: 4px;
	appearance: none;
`;
export const ProfileSettingsOption = styled.option``;
export const ProfileSettingsTheme = styled.p`
	margin: 0;
	padding: 0;
	margin-bottom: 5px;
	font-size: 13px;
	line-height: 20px;
	color: ${(props) => (props.theme === 'dark' ? '#fff' : '#464e5f')};
`;

export const ProfileSettingsButton = styled.button`
	position: absolute;
	bottom: -120px;
	right: 0;
	padding: 12px 20px;
	font-weight: 600;
	font-size: 13px;
	line-height: 20px;
	color: ${(props) => (props.theme === 'dark' ? '#000' : '#fff')};
	background: ${(props) => (props.theme === 'dark' ? '#fff' : '#152540')};
	border-radius: 4px;
`;

export const CheckBoxWrapper = styled.div`
	padding-bottom: 60px;
	border-bottom: 3px solid #ecf0f3;
	position: relative;
`;
export const CheckBoxLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 70px;
	height: 26px;
	cursor: pointer;
	background: #f3f6f9;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 34px;
	&::after {
		content: '';
		display: block;
		border-radius: 50%;
		width: 18px;
		height: 18px;
		margin: 3px;
		background: #3699ff;
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
		transition: 0.2s;
	}
`;
export const CheckBox = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 70px;
	height: 26px;
	&:checked + ${CheckBoxLabel} {
		background: #f3f6f9;
		&::after {
			content: '';
			display: block;
			border-radius: 50%;
			width: 18px;
			height: 18px;
			margin-left: 48px;
			transition: 0.2s;
		}
	}
`;
