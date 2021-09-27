import { getData } from './helper';

const path = ' https://rickandmortyapi.com/api';

const getAllCharacters = () => {
	const url = `${path}/character`;

	return getData(url);
};
