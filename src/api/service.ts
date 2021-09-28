import { CharacterResponse } from '../types/response';
import { getData } from './helper';

const path = new URL(' https://rickandmortyapi.com/api');

const getUrl = (
	name: string,
	status: string,
	gender: string,
) => (`${path}/character/?name=${name}&status=${status}&gender=${gender}`);

export const getCharacters = (
	name: string,
	status: string,
	gender: string,
):Promise<CharacterResponse> => {
	const url = getUrl(name, status, gender);

	return getData(url);
};

export const getPageCharacters = (
	page: number,
	name: string,
	status: string,
	gender: string,
):Promise<CharacterResponse> => {
	const url = `${getUrl(name, status, gender)}&page=${page}`;

	return getData(url);
};
