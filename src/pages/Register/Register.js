import axios from 'axios';
import { useFormik } from 'formik';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Languages } from '../../Languages/Languages';
import { addToken } from '../../redux/token/tokenAction';
import {
	RegisterButton,
	RegisterDescription,
	RegisterDescriptionLink,
	RegisterErrorSpan,
	RegisterForm,
	RegisterInput,
	RegisterLeftWrapper,
	RegisterRightWrapper,
	RegisterTitle,
	RegisterWrapper,
} from './Register.styled';

export const Register = () => {
	const firstName = useRef('');
	const lastName = useRef('');
	const phoneNum = useRef('');
	const user_email = useRef('');
	const user_password = useRef('');
	const navigate = useNavigate('');
	const dispatch = useDispatch();

	const state = useSelector((state) => state);
	const theme = state.mode.theme;
	const lang = state.language.language;

	const formik = useFormik({
		initialValues: {
			first_name: '',
			last_name: '',
			phone: '',
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			axios
				.post(
					'https://book-bekend-production.up.railway.app/user/register',
					{
						first_name: values.first_name,
						last_name: values.last_name,
						phone: String(values.phone),
						email: values.email,
						password: values.password,
					},
				)
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
			if (!values.first_name) {
				errors.first_name = 'Name required';
			}
			if (!values.last_name) {
				errors.last_name = 'Surname required';
			}
			if (!values.phone) {
				errors.phone = 'Phone required';
			}
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
					{Languages[lang].register.registerTitle}
				</RegisterTitle>
				<RegisterDescription theme={theme}>
					{Languages[lang].register.registerLink}
					<RegisterDescriptionLink to={'/login'}>
						{Languages[lang].login.registerTitle}
					</RegisterDescriptionLink>
				</RegisterDescription>
				<RegisterForm
					onSubmit={(evt) => {
						evt.preventDefault();
						formik.handleSubmit();
					}}
				>
					<RegisterInput
						ref={firstName}
						type="text"
						placeholder={Languages[lang].register.firstName}
						theme={theme}
						top
						name="first_name"
						id="first_name"
						value={formik.values.first_name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.first_name && formik.errors.first_name ? (
						<RegisterErrorSpan>
							{formik.errors.first_name}
						</RegisterErrorSpan>
					) : null}
					<RegisterInput
						ref={lastName}
						type="text"
						placeholder={Languages[lang].register.lastName}
						theme={theme}
						name="last_name"
						id="last_name"
						value={formik.values.last_name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.last_name && formik.errors.last_name ? (
						<RegisterErrorSpan>
							{formik.errors.last_name}
						</RegisterErrorSpan>
					) : null}
					<RegisterInput
						ref={phoneNum}
						type="number"
						placeholder={Languages[lang].register.phone}
						theme={theme}
						name="phone"
						id="phone"
						value={formik.values.phone}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.phone && formik.errors.phone ? (
						<RegisterErrorSpan>
							{formik.errors.phone}
						</RegisterErrorSpan>
					) : null}
					<RegisterInput
						ref={user_email}
						type="email"
						placeholder={Languages[lang].register.email}
						theme={theme}
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
						ref={user_password}
						type="password"
						placeholder={Languages[lang].register.password}
						theme={theme}
						bottom
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
