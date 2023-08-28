import React from 'react';
import { useSelector } from 'react-redux';
import {
	AuthorDeadDate,
	AuthorName,
	InnerLink,
	Item,
	ItemImage,
	ItemInnerWrapper,
} from './AuthorItem.styled';

export const AuthorItem = ({
	image,
	name,
	birth_date,
	death_date,
	last_name,
	id,
}) => {
	const state = useSelector((state) => state);

	const theme = state.mode.theme;
	return (
		<Item theme={theme}>
			<InnerLink to={`/singleAuthor/${id}`}>
				<ItemImage
					src={`https://book-bekend-production.up.railway.app/${image}`}
					alt={`${name}`}
				/>
				<ItemInnerWrapper>
					<AuthorName theme={theme}>
						{name + ' ' + last_name}
					</AuthorName>
					<AuthorDeadDate theme={theme}>
						<span>{birth_date}</span>-<span>{death_date}</span>
					</AuthorDeadDate>
				</ItemInnerWrapper>
			</InnerLink>
		</Item>
	);
};
