import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Languages } from '../../Languages/Languages';
import {
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
} from './AddBook.styled';

export const AddBook = () => {
	const [genre, setGenre] = useState([]);
	const [author, setAuthor] = useState([]);
	const [image, setImage] = useState(null);

	const book_title = useRef('');
	const book_pages = useRef('');
	const book_year = useRef('');
	const book_price = useRef('');
	const book_genre = useRef('');
	const book_author = useRef('');
	const book_comment = useRef('');
	const state = useSelector((state) => state);

	const theme = state.mode.theme;
	const lang = state.language.language;
	useEffect(() => {
		axios
			.get(`https://book-bekend.onrender.com/genre`)
			.then((res) => setGenre(res.data))
			.catch((error) => console.log(error));
	}, []);

	const getAuthors = (genreId) => {
		axios
			.get(`https://book-bekend.onrender.com/author/genreId/${genreId}`)
			.then((res) => setAuthor(res.data))
			.catch((error) => console.log(error));
	};

	const imageValue = (props) => {
		setImage(props.target.files[0]);
	};

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		let formData = new FormData();
		formData.append('title', book_title?.current.value);
		formData.append('page', book_pages?.current?.value);
		formData.append('year', book_year?.current?.value);
		formData.append('price', book_price?.current?.value);
		formData.append('genre_id', book_genre?.current?.value);
		formData.append('author_id', book_author?.current?.value);
		formData.append('description', book_comment?.current?.value);
		formData.append('image', image);

		axios
			.post('https://book-bekend.onrender.com/book', formData, {
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
					{Languages[lang].addBook.title}
				</BookWrapperTitle>
				<BookWrapperForm onSubmit={handleFormSubmit}>
					<BookWrapperInput
						type="text"
						placeholder={Languages[lang].addBook.inputFirst}
						theme={theme}
						ref={book_title}
					/>
					<BookWrapperInput
						type="text"
						placeholder={Languages[lang].addBook.inputSecond}
						theme={theme}
						ref={book_pages}
					/>
					<BookWrapperInput
						type="number"
						placeholder={Languages[lang].addBook.inputThird}
						theme={theme}
						ref={book_year}
					/>
					<BookWrapperInput
						type="number"
						placeholder={Languages[lang].addBook.inputFourth}
						theme={theme}
						ref={book_price}
					/>
					<BookWrapperSelect
						theme={theme}
						onChange={(evt) => getAuthors(evt.target.value)}
						ref={book_genre}
					>
						<option value="Genre" defaultValue hidden>
							{Languages[lang].addBook.inputFivth}
						</option>
						{genre.map((item) => (
							<option key={item.id} value={item.id}>
								{item.name}
							</option>
						))}
					</BookWrapperSelect>
					<BookWrapperSelect theme={theme} ref={book_author}>
						<option value="Author" defaultValue hidden>
							{Languages[lang].addBook.inputSixth}
						</option>
						{author.map((item) => (
							<option key={item.id} value={item.id}>
								{item.first_name + ' ' + item.last_name}
							</option>
						))}
					</BookWrapperSelect>
					<BookWrapperTextarea
						cols="30"
						rows="10"
						placeholder={Languages[lang].addBook.inputSeventh}
						theme={theme}
						ref={book_comment}
					></BookWrapperTextarea>

					<BookWrapperLabel htmlFor="input" theme={theme}>
						<BookWrapperDescription theme={theme}>
							{Languages[lang].addBook.addImage}
						</BookWrapperDescription>
					</BookWrapperLabel>
					<BookWrapperLeftInput
						type="file"
						id="input"
						onChange={imageValue}
					/>

					<BookBtn type="submit" theme={theme}>
						{Languages[lang].addBook.button}
					</BookBtn>
				</BookWrapperForm>
			</BookWrapperRight>
		</BookWrapper>
	);
};
