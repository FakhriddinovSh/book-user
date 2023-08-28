import axios from 'axios';
import { useFormik } from 'formik';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Languages } from '../../Languages/Languages';
import { addToken } from '../../redux/token/tokenAction';
import { RegisterErrorSpan } from '../Register/Register.styled';
import {
	RegisterButton,
	RegisterDescription,
	RegisterDescriptionLink,
	RegisterForm,
	RegisterInput,
	RegisterLeftWrapper,
	RegisterRightWrapper,
	RegisterTitle,
	RegisterWrapper,
} from './Login.styled';

export const Login = () => {
	const user_email = useRef();
	const user_password = useRef();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const state = useSelector((state) => state);

	const theme = state.mode.theme;
	const lang = state.language.language;

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			axios
				.post('https://book-bekend.onrender.com/user/login', {
					email: values.email,
					password: values.password,
				})
				.then((res) => {
					if (res.status === 201) {
						JSON.stringify(
							dispatch(addToken(res.data.token)),
							window.localStorage.setItem(
								'token',
								res.data.token,
							),
						);
						navigate('/');
					}
				})
				.catch((err) => console.log(err));
		},
		validate: (values) => {
			let errors = {};
			if (!values.email) {
				errors.email = 'Email required';
			}
			if (!values.password) {
				errors.password = 'Password required';
			}
			return errors;
		},
	});

	return (
		<RegisterWrapper>
			<RegisterLeftWrapper></RegisterLeftWrapper>
			<RegisterRightWrapper theme={theme}>
				<RegisterTitle theme={theme}>
					{Languages[lang].login.registerTitle}
				</RegisterTitle>
				<RegisterDescription theme={theme}>
					{Languages[lang].login.registerLink}
					<RegisterDescriptionLink to={'/register'}>
						{Languages[lang].register.registerTitle}
					</RegisterDescriptionLink>
				</RegisterDescription>
				<RegisterForm
					onSubmit={(evt) => {
						evt.preventDefault();
						formik.handleSubmit();
					}}
				>
					<RegisterInput
						type="email"
						ref={user_email}
						placeholder={Languages[lang].register.email}
						theme={theme}
						top
						required
						name="email"
						id="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.email && formik.errors.email ? (
						<RegisterErrorSpan>
							{formik.errors.email}
						</RegisterErrorSpan>
					) : null}
					<RegisterInput
						type="password"
						ref={user_password}
						placeholder={Languages[lang].register.password}
						theme={theme}
						bottom
						required
						name="password"
						id="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.password && formik.errors.password ? (
						<RegisterErrorSpan>
							{formik.errors.password}
						</RegisterErrorSpan>
					) : null}
					<RegisterButton theme={theme} type="submit">
						{Languages[lang].register.button}
					</RegisterButton>
				</RegisterForm>
			</RegisterRightWrapper>
		</RegisterWrapper>
	);
};
