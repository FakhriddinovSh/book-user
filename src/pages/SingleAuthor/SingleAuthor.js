import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Hoshimov from '../../assets/images/oHoshimov.jpg';
import { SIngleAuthorItem } from '../../components/SingleAuthorItem/SIngleAuthorItem';
import { Languages } from '../../Languages/Languages';
import { Container } from '../Home/Home.styled';
import {
	SingleAuthorArrow,
	SingleAuthorBottomLeftBirthDate,
	SingleAuthorBottomLeftSpan,
	SingleAuthorBottomWrapper,
	SingleAuthorCarousel,
	SingleAuthorCarouselTextOne,
	SingleAuthorCarouselTextTwo,
	SingleAuthorDesc,
	SingleAuthorInner,
	SingleAuthorList,
	SingleAuthorRight,
	SingleAuthorTitle,
	SingleAuthorWrapperDiv,
	SingleAuthorYear,
} from './SingleAuthor.styled';

export const SingleAuthor = () => {
	const params = useParams();
	const state = useSelector((state) => state);
	const [authorInfo, setAuthorInfo] = useState([]);
	const [authorBooks, setAuthorBooks] = useState([]);

	const theme = state.mode.theme;
	const lang = state.language.language;

	useEffect(() => {
		axios
			.get(
				`https://book-bekend-production.up.railway.app/author/authorId/${params.id}`,
				{
					headers: {
						Authorization: state.token.token,
					},
				},
			)
			.then((res) => setAuthorInfo(res.data))
			.catch((err) => console.log(err));
	}, [params.id]);

	const usersBookId = String(authorInfo.id);

	useEffect(() => {
		axios
			.get(
				`https://book-bekend-production.up.railway.app/author/books/${usersBookId}`,
				{
					headers: {
						Authorization: state.token.token,
					},
				},
			)
			.then((res) => setAuthorBooks(res.data))
			.catch((err) => console.log(err));
	}, [usersBookId]);

	return (
		<Container>
			<SingleAuthorInner>
				<div>
					<img
						src={`https://book-bekend-production.up.railway.app/${authorInfo.image}`}
						width="505"
						height="681"
						alt="Hoshimov"
					/>
				</div>
				<SingleAuthorRight>
					<SingleAuthorTitle>
						{authorInfo.first_name + ' ' + authorInfo.last_name}
					</SingleAuthorTitle>
					<SingleAuthorDesc theme={theme}>
						{authorInfo.bio}
					</SingleAuthorDesc>
					<SingleAuthorBottomWrapper>
						<SingleAuthorBottomLeftSpan>
							<SingleAuthorBottomLeftBirthDate
								theme={theme}
								bottom
							>
								{Languages[lang].singleAuthor.birthDate}
							</SingleAuthorBottomLeftBirthDate>
							<SingleAuthorYear>
								{authorInfo.date_of_birth}
							</SingleAuthorYear>
							<SingleAuthorBottomLeftBirthDate theme={theme}>
								Tashkent, Uzbekistan
							</SingleAuthorBottomLeftBirthDate>
						</SingleAuthorBottomLeftSpan>
						<SingleAuthorArrow>-</SingleAuthorArrow>
						<SingleAuthorBottomLeftSpan>
							<SingleAuthorBottomLeftBirthDate
								theme={theme}
								bottom
							>
								{Languages[lang].singleAuthor.deathDate}
							</SingleAuthorBottomLeftBirthDate>
							<SingleAuthorYear>
								{authorInfo?.date_of_death}
							</SingleAuthorYear>
							<SingleAuthorBottomLeftBirthDate theme={theme}>
								Tashkent, Uzbekistan
							</SingleAuthorBottomLeftBirthDate>
						</SingleAuthorBottomLeftSpan>
					</SingleAuthorBottomWrapper>
				</SingleAuthorRight>
			</SingleAuthorInner>

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
					{authorBooks.map((item) => (
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
