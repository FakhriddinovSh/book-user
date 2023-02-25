import React, { useEffect, useState } from 'react';
import {
	SingleAuthorListImage,
	SingleAuthorListItem,
	SingleAuthorListName,
	SingleAuthorListTitle,
} from '../../pages/SingleAuthor/SingleAuthor.styled';
import { SingleAuthorItemLink } from './SingleAuthorItem.styled';
import axios from 'axios';
import { useSelector } from 'react-redux';

export const SIngleAuthorItem = ({ image, title, author_id, path }) => {
	const state = useSelector((state) => state);
	const [authorName, setAuthorName] = useState('');

	const theme = state.mode.theme;
	useEffect(() => {
		axios
			.get(
				`https://book-bekend.onrender.com/author/authorId/${author_id}`,
				{
					headers: {
						Authorization: state.token.token,
					},
				},
			)
			.then((res) => setAuthorName(res.data))
			.catch((err) => console.log(err));
	}, [author_id]);

	const bookId = String(path);

	return (
		<SingleAuthorItemLink to={`/singleBook/${bookId}`}>
			<SingleAuthorListItem>
				<SingleAuthorListImage
					src={`https://book-bekend.onrender.com/${image}`}
					width="190"
					height="283"
					alt="book"
				/>
				<SingleAuthorListTitle theme={theme}>
					{title}
				</SingleAuthorListTitle>
				<SingleAuthorListName theme={theme}>
					{authorName.first_name + ' ' + authorName.last_name}
				</SingleAuthorListName>
			</SingleAuthorListItem>
		</SingleAuthorItemLink>
	);
};
