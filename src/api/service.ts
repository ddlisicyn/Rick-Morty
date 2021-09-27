import { CharacterResponse } from '../types/response';
import { getData } from './helper';

const path = ' https://rickandmortyapi.com/api';

export const getAllCharacters = ():Promise<CharacterResponse> => {
	const url = `${path}/character`;

	return getData(url);
};

export const getPageCharacters = (page: number):Promise<CharacterResponse> => {
	const url = `${path}/character/?page=${page}`;

	return getData(url);
};
