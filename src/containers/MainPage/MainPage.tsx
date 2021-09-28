import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { Page } from '../../components/Page/Page';
import { Header } from '../../components/Header/Header';
import { CharacterCard } from '../../components/Card/CharacterCard';
import { Loader } from '../../components/Loader/Loader';
import { getCharacters, getPageCharacters } from '../../api/service';
import { PaginationInfo, Character } from '../../types';
import style from './MainPage.module.css';
import { routes } from '../../constants/Routes';

const { core, profile } = routes;

export const MainPage = () => {
	const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>();
	const [characters, setCharacters] = useState<Character[]>([]);
	const [loading, setLoading] = useState(false);
	const [filter, setFilter] = useState({
		name: '',
		status: '',
		gender: '',
	});
	const history = useHistory();

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

	const handleClick = () => {
		history.push(profile);
	};

	return (
		<>
			<Header
				handleChange={handleChange}
				handleClick={handleClick}
				status={filter.status}
				gender={filter.gender}
			/>
			<Page>
				<Loader loading={loading}>
					<Grid
						container
						spacing={{ xs: 2, md: 4 }}
						columns={{ xs: 4, sm: 6, md: 12 }}
					>
						{
							characters.length ? characters.map((character) => (
								<Grid item xs={2} sm={2} md={3} key={character.id}>
									<CharacterCard data={character} />
								</Grid>
							)) : 'No characters was found'
						}
					</Grid>
					<Pagination
						style={{ margin: '24px 0 12px 0' }}
						onChange={(e, page) => handlePageChange(page)}
						count={paginationInfo?.pages}
					/>
				</Loader>
			</Page>
		</>
	);
};
