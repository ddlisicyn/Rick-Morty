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
import { ROUTES } from '../../constants/routes';
import { Empty } from '../../components/Empty/Empty';

const { PROFILE } = ROUTES;

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
		history.push(PROFILE);
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
					{characters.length ? (
						<>
							<Grid
								container
								spacing={{ xs: 2, md: 4 }}
								columns={{ xs: 4, sm: 6, md: 12 }}
							>
								{
									characters.map((character) => (
										<Grid item xs={2} sm={2} md={3} key={character.id}>
											<CharacterCard data={character} />
										</Grid>
									))
								}
							</Grid>
							<Pagination
								style={{ padding: '24px 0' }}
								onChange={(_, page) => handlePageChange(page)}
								count={paginationInfo?.pages}
							/>
						</>
					) : (
						<Empty text="No characters was found" />
					)}
				</Loader>
			</Page>
		</>
	);
};
