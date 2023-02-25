import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
/* poppins-regular - latin */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	src: url('../src/assets/fonts/poppins-v20-latin-regular.woff2')
	format('woff2'),
	/* Chrome 26+, Opera 23+, Firefox 39+ */
	url('../src/assets/fonts/poppins-v20-latin-regular.woff')
	format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* poppins-500 - latin */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	src: url('../src/assets/fonts/poppins-v20-latin-500.woff2') format('woff2'),
	/* Chrome 26+, Opera 23+, Firefox 39+ */
	url('../src/assets/fonts/poppins-v20-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* poppins-600 - latin */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 600;
	src: url('../src/assets/fonts/poppins-v20-latin-600.woff2') format('woff2'),
	/* Chrome 26+, Opera 23+, Firefox 39+ */
	url('../src/assets/fonts/poppins-v20-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* GENERAL */
* {
	box-sizing: border-box;
}

*::before,
*::after {
	box-sizing: inherit;
}

html {
	height: 100%;
	box-sizing: border-box;
}

img {
	display: block;
	height: auto;
}

body {
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: 0;
	padding: 0;
	font-family: 'Poppins', 'Arial', sans-serif;
	font-size: 16px;
	font-weight: 400;
}

/* STICKY-FOOTER */
.site-main {
	flex-grow: 1;
}

.hero-title {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.header-active{
	color: #000;
}
`;
