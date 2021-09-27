import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { Page } from '../../components/Page/Page';
import { Header } from '../../components/Header/Header';
import { CharacterCard } from '../../components/Card/CharacterCard';
import { getAllCharacters, getPageCharacters } from '../../api/service';
import { PaginationInfo, Character } from '../../types';

export const MainPage = () => {
	const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>();
	const [characters, setCharacters] = useState<Character[]>([]);

	useEffect(() => {
		getAllCharacters()
			.then((response) => {
				setPaginationInfo(response.info);
				setCharacters(response.results);
			});
	}, []);

	const handlePageChange = (page: number) => {
		getPageCharacters(page)
			.then((response) => setCharacters(response.results));
	};

	return (
		<Page>
			<Header />
			<Grid container rowSpacing={2}>
				{
					characters.map((character) => (
						<CharacterCard key={character.id} data={character} />
					))
				}
			</Grid>
			<Pagination
				onChange={(e, page) => handlePageChange(page)}
				count={paginationInfo?.pages}
			/>
		</Page>
	);
};
