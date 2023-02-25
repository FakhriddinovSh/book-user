import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Languages } from '../../Languages/Languages';
import {
	AuthorOption,
	BookBtn,
	BookWrapper,
	BookWrapperDescription,
	BookWrapperForm,
	BookWrapperInput,
	BookWrapperLabel,
	BookWrapperLeft,
	BookWrapperLeftInput,
	BookWrapperRight,
	BookWrapperSelect,
	BookWrapperTextarea,
	BookWrapperTitle,
} from './AddAuthor.styled';

export const AddAuthor = () => {
	const [image, setImage] = useState(null);

	const authorName = useRef();
	const authorLastName = useRef();
	const authorDate = useRef();
	const authorDeath = useRef();
	const authorCountry = useRef();
	const authorGenre = useRef();
	const authorBio = useRef();

	const [genres, setGenres] = useState([]);
	const state = useSelector((state) => state);

	const imageValue = (props) => {
		setImage(props.target.files[0]);
	};

	const theme = state.mode.theme;
	const lang = state.language.language;

	useEffect(() => {
		axios
			.get('https://book-bekend.onrender.com/genre')
			.then((res) => setGenres(res.data))
			.catch((error) => console.log(error));
	}, []);

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		let formData = new FormData();

		formData.append('first_name', authorName?.current.value);
		formData.append('last_name', authorLastName?.current?.value);
		formData.append('date_of_birth', authorDate?.current?.value);
		formData.append('date_of_death', authorDeath?.current?.value);
		formData.append('country', authorCountry?.current?.value);
		formData.append('bio', authorBio?.current?.value);
		formData.append('genre_id', authorGenre?.current?.value);
		formData.append('image', image);

		axios
			.post('https://book-bekend.onrender.com/author', formData, {
				headers: {
					Authorization: state.token.token,
				},
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<BookWrapper>
			<BookWrapperLeft theme={theme}></BookWrapperLeft>
			<BookWrapperRight theme={theme}>
				<BookWrapperTitle theme={theme}>
					{Languages[lang].addAuthor.title}
				</BookWrapperTitle>

				<BookWrapperForm onSubmit={handleFormSubmit}>
					<BookWrapperInput
						ref={authorName}
						type="text"
						placeholder={Languages[lang].addAuthor.firstName}
						theme={theme}
					/>
					<BookWrapperInput
						ref={authorLastName}
						type="text"
						placeholder={Languages[lang].addAuthor.lastName}
						theme={theme}
					/>
					<BookWrapperInput
						ref={authorDate}
						type="text"
						placeholder={Languages[lang].addAuthor.birthDate}
						theme={theme}
					/>
					<BookWrapperInput
						ref={authorDeath}
						type="text"
						placeholder={Languages[lang].addAuthor.deathDate}
						theme={theme}
					/>
					<BookWrapperInput
						ref={authorCountry}
						type="text"
						placeholder={Languages[lang].addAuthor.country}
						theme={theme}
					/>
					<BookWrapperSelect theme={theme} ref={authorGenre}>
						<AuthorOption value="Author" defaultValue hidden>
							{Languages[lang].addBook.inputSixth}
						</AuthorOption>
						{genres.map((item) => (
							<AuthorOption key={item.id} value={item.id}>
								{item.name}
							</AuthorOption>
						))}
					</BookWrapperSelect>

					<BookWrapperLabel htmlFor="input" theme={theme}>
						<BookWrapperDescription theme={theme}>
							{Languages[lang].addBook.addImage}
						</BookWrapperDescription>
					</BookWrapperLabel>
					<BookWrapperLeftInput
						type="file"
						id="input"
						onChange={imageValue}
						required
					/>

					<BookWrapperTextarea
						ref={authorBio}
						cols="30"
						rows="10"
						placeholder={Languages[lang].addBook.inputSeventh}
						theme={theme}
					></BookWrapperTextarea>
					<BookBtn type="submit" theme={theme}>
						{Languages[lang].addBook.button}
					</BookBtn>
				</BookWrapperForm>
			</BookWrapperRight>
		</BookWrapper>
	);
};
