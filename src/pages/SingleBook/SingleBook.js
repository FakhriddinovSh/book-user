import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SIngleAuthorItem } from '../../components/SingleAuthorItem/SIngleAuthorItem';
import { Languages } from '../../Languages/Languages';
import { Container } from '../Home/Home.styled';
import {
	SingleAuthorCarousel,
	SingleAuthorCarouselTextOne,
	SingleAuthorCarouselTextTwo,
	SingleAuthorList,
	SingleAuthorWrapperDiv,
} from '../SingleAuthor/SingleAuthor.styled';
import {
	SingleBookArrow,
	SingleBookDescription,
	SingleBookLeftWrapper,
	SingleBookList,
	SingleBookListItem,
	SingleBookPages,
	SingleBookPagesCount,
	SingleBookRightWrapper,
	SingleBookTitle,
	SingleBookWrapper,
} from './SingleBook.styled';

export const SingleBook = () => {
	const params = useParams();
	const state = useSelector((state) => state);
	const [singleBook, setSingleBook] = useState([]);
	const [allBooks, setAllBooks] = useState([]);

	const theme = state.mode.theme;
	const lang = state.language.language;
	useEffect(() => {
		axios
			.get(`https://book-bekend.onrender.com/book/bookId/${params.id}`, {
				headers: {
					Authorization: state.token.token,
				},
			})
			.then((res) => setSingleBook(res.data))
			.catch((err) => console.log(err));
	}, [params.id]);

	useEffect(() => {
		axios
			.get(
				`https://book-bekend.onrender.com/author/books/${singleBook.author_id}`,
				{
					headers: {
						Authorization: state.token.token,
					},
				},
			)
			.then((res) => setAllBooks(res.data))
			.catch((err) => console.log(err));
	}, [singleBook.id]);

	return (
		<Container>
			<SingleBookWrapper>
				<SingleBookLeftWrapper>
					<img
						src={`https://book-bekend.onrender.com/${singleBook.image}`}
						width="505"
						height="681"
						alt="single book"
					/>
				</SingleBookLeftWrapper>
				<SingleBookRightWrapper>
					<SingleBookTitle theme={theme}>
						{singleBook.title}
					</SingleBookTitle>
					<SingleBookList>
						<SingleBookListItem>
							<SingleBookPages theme={theme}>
								{Languages[lang].singleBook.pagesCount}
							</SingleBookPages>
							<SingleBookPagesCount theme={theme}>
								{singleBook.page} page
							</SingleBookPagesCount>
						</SingleBookListItem>
						<SingleBookListItem>
							<SingleBookPages theme={theme}>
								{Languages[lang].singleBook.bookDate}
							</SingleBookPages>
							<SingleBookPagesCount theme={theme}>
								{singleBook.year} years
							</SingleBookPagesCount>
						</SingleBookListItem>
						<SingleBookListItem>
							<SingleBookPages theme={theme}>
								{Languages[lang].singleBook.price}
							</SingleBookPages>
							<SingleBookPagesCount theme={theme}>
								${singleBook.price}
							</SingleBookPagesCount>
						</SingleBookListItem>
					</SingleBookList>
					<SingleBookArrow theme={theme}>
						To’liq ma’lumot
					</SingleBookArrow>
					<SingleBookDescription theme={theme}>
						{singleBook.description}
					</SingleBookDescription>
				</SingleBookRightWrapper>
			</SingleBookWrapper>

			<SingleAuthorWrapperDiv>
				<SingleAuthorCarousel>
					<SingleAuthorCarouselTextOne>
						{Languages[lang].singleAuthor.poems}
					</SingleAuthorCarouselTextOne>
					<SingleAuthorCarouselTextTwo theme={theme} to={'/books/1'}>
						{Languages[lang].singleAuthor.allBook}
					</SingleAuthorCarouselTextTwo>
				</SingleAuthorCarousel>

				<SingleAuthorList>
					{allBooks.map((item) => (
						<SIngleAuthorItem
							image={item.image}
							title={item.title}
							author_id={item.author_id}
							theme={theme}
							path={item.id}
						/>
					))}
				</SingleAuthorList>
			</SingleAuthorWrapperDiv>
		</Container>
	);
};
