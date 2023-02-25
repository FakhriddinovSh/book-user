import styled from 'styled-components';
import CameraIcon from '../../assets/images/icons/bi_camera.png';

export const ProfilForm = styled.form`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;
`;

export const ProfilBottom = styled.div`
	height: 89.8vh;
	padding-top: 70px;
	padding-right: 103px;
	padding-left: 104px;
	background-color: ${(props) =>
		props.theme === 'dark' ? '#191919' : '#fff'};
`;

export const ProfilBottomRight = styled.div`
	display: flex;
	flex-direction: column;
`;
export const ProfilBottomLeft = styled.div`
	position: relative;
	top: -80px;
	right: -200px;
	background-color: #fff;
	border-radius: 50px;
	&::after {
		position: absolute;
		bottom: -200px;
		left: 420px;
		width: 708px;
		height: 20px;
		border-top: 1px solid
			${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
		content: '';
	}
`;
export const ProfilTitle = styled.h3`
	margin-bottom: 32px;
	font-weight: 700;
	font-size: 18px;
	line-height: 27px;
	color: ${(props) => (props.theme === 'dark' ? '#DEDEDE' : '#212121')};
`;

export const ProfilLabel = styled.label`
	display: flex;
	flex-direction: column;
	margin-bottom: 43px;
	font-size: 13px;
	line-height: 20px;
	color: ${(props) => (props.theme === 'dark' ? '#F3F6F9' : '#464e5f')};
`;

export const ProfilInput = styled.input`
	position: relative;
	width: 708px;
	padding: 12px 0;
	padding-left: 20px;
	font-size: 14px;
	line-height: 21px;
	color: #464e5f;
	background: #f3f6f9;
	border-radius: 4px;
	border: none;
`;

export const ProfileButton = styled.button`
	position: absolute;
	bottom: 90px;
	padding: 12px 20px;
	font-weight: 600;
	font-size: 13px;
	line-height: 20px;
	color: ${(props) => (props.theme === 'dark' ? '#0D0D0D' : '#ffffff')};
	background: ${(props) => (props.theme === 'dark' ? '#fff' : '#152540')};
	border-radius: 4px;
`;

export const ProfileImageInput = styled.input`
	display: none;
`;

export const ProfileImageLabel = styled.label`
	position: relative;
	width: 175px;
	height: 175px;
	border-radius: 50px;
	border: 1px solid #000;
	&::after {
		position: absolute;
		right: -20px;
		bottom: -20px;
		content: '';
		width: 50px;
		height: 50px;
		background-color: #f3f6f9;
		border-radius: 8px;
		background-image: url(${CameraIcon});
		background-repeat: no-repeat;
		background-position: center;
	}
`;
