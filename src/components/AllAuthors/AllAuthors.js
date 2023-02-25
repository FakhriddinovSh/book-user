import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Languages } from '../../Languages/Languages';
import { Container } from '../../pages/Home/Home.styled';
import {
	AllAuthorsDesc,
	AllAuthorsGenre,
	AllAuthorsGenreItem,
	AllAuthorsList,
	AllAuthorsWrapper,
} from '../AllAuthors/AllAuthors.styled';
import { AuthorItem } from '../AuthorItem/AuthorItem';
// import { AuthorSearch } from '../AuthorSearch/AuthorSearch';
import {
	SearchButton,
	SearchForm,
	SearchInput,
	SearchTitle,
	SearchWrapper,
} from '../AuthorSearch/AuthorSearch.styled';
import CarouselBanner from '../Carousel/Carousel';
import { AllAuthorsGenreLink } from './AllAuthors.styled';

export const AllAuthors = ({ theme, lang }) => {
	const params = useParams();
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		axios
			.get(`https://book-bekend.onrender.com/author/genreId/${params.id}`)
			.then((res) => setAuthors(res.data))
			.catch((err) => console.log(err));
	}, [params.id]);

	const searchAuthor = useRef();
	const [searchedAuthor, setSearchedAuthor] = useState([]);

	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		axios
			.get(
				`https://book-bekend.onrender.com/author/search?author=${searchAuthor.current.value}`,
			)
			.then((res) => setSearchedAuthor(res.data))
			.catch((err) => console.log(err));
		searchAuthor.current.value = '';
	};

	const clearSearched = () => {
		setSearchedAuthor([]);
	};

	return (
		<Container>
			<CarouselBanner />
			<AllAuthorsList>
				{searchedAuthor.length !== 0
					? searchedAuthor.map((item) => (
							<AuthorItem
								id={item.id}
								image={item?.image}
								name={item?.first_name}
								last_name={item?.last_name}
								birth_date={item?.date_of_birth}
								death_date={item?.date_of_death}
								theme={theme}
							/>
					  ))
					: ''}
			</AllAuthorsList>

			<SearchWrapper theme={theme}>
				<SearchTitle theme={theme}>
					{Languages[lang].search.search}
				</SearchTitle>
				<SearchForm onSubmit={handleFormSubmit}>
					<SearchInput
						theme={theme}
						ref={searchAuthor}
						type="text"
						placeholder={Languages[lang].search.placeholder}
						required
					/>
					<SearchButton theme={theme} type="Submit">
						{Languages[lang].search.search}
					</SearchButton>
				</SearchForm>
			</SearchWrapper>

			<AllAuthorsWrapper>
				<AllAuthorsDesc>
					{Languages[lang].search.categories}
				</AllAuthorsDesc>
				<AllAuthorsGenre>
					<AllAuthorsGenreItem>
						<AllAuthorsGenreLink
							onClick={clearSearched}
							theme={theme}
							to={`/1`}
						>
							Temuriylar
						</AllAuthorsGenreLink>
					</AllAuthorsGenreItem>
					<AllAuthorsGenreItem>
						<AllAuthorsGenreLink
							onClick={clearSearched}
							theme={theme}
							to={`/2`}
						>
							Jadid adabiyoti
						</AllAuthorsGenreLink>
					</AllAuthorsGenreItem>
					<AllAuthorsGenreItem>
						<AllAuthorsGenreLink
							onClick={clearSearched}
							theme={theme}
							to={`/3`}
						>
							Sovet davri
						</AllAuthorsGenreLink>
					</AllAuthorsGenreItem>
					<AllAuthorsGenreItem>
						<AllAuthorsGenreLink
							onClick={clearSearched}
							theme={theme}
							to={`/4`}
						>
							Mustaqillik davri
						</AllAuthorsGenreLink>
					</AllAuthorsGenreItem>
				</AllAuthorsGenre>
				<AllAuthorsList>
					{authors?.map((item) => (
						<AuthorItem
							id={item.id}
							image={item?.image}
							name={item?.first_name}
							last_name={item?.last_name}
							birth_date={item?.date_of_birth}
							death_date={item?.date_of_death}
							theme={theme}
						/>
					))}
				</AllAuthorsList>
			</AllAuthorsWrapper>
		</Container>
	);
};
