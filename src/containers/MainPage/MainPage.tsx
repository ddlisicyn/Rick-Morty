import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { Page } from '../../components/Page/Page';
import { Header } from '../../components/Header/Header';
import { CharacterCard } from '../../components/Card/CharacterCard';
import { Loader } from '../../components/Loader/Loader';
import { getCharacters, getPageCharacters } from '../../api/service';
import { PaginationInfo, Character } from '../../types';

export const MainPage = () => {
	const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>();
	const [characters, setCharacters] = useState<Character[]>([]);
	const [loading, setLoading] = useState(false);
	const [filter, setFilter] = useState({
		name: '',
		status: '',
		gender: '',
	});

	useEffect(() => {
		setLoading(true);
		getCharacters(filter.name, filter.status, filter.gender)
			.then((response) => {
				setPaginationInfo(response.info);
				setCharacters(response.results);
			})
			.catch(() => {
				setCharacters([]);
			})
			.finally(() => setLoading(false));
	}, [filter]);

	const handlePageChange = (page: number) => {
		getPageCharacters(page, filter.name, filter.status, filter.gender)
			.then((response) => {
				setCharacters(response.results);
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				});
			});
	};

	const handleChange = (fieldName: 'name' | 'status' | 'gender') => (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value as string;
		setFilter((lastFilter) => ({ ...lastFilter, [fieldName]: value }));
	};

	return (
		<Page>
			<Header
				handleChange={handleChange}
				status={filter.status}
				gender={filter.gender}
			/>
			<Loader loading={loading}>
				<Grid container rowSpacing={2}>
					{
						characters.length ? characters.map((character) => (
							<CharacterCard key={character.id} data={character} />
						)) : 'No characters was found'
					}
				</Grid>
				<Pagination
					onChange={(e, page) => handlePageChange(page)}
					count={paginationInfo?.pages}
				/>
			</Loader>
		</Page>
	);
};
