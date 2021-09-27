import { Character, PaginationInfo } from './index';

export type CharacterResponse = {
	info: PaginationInfo,
	results: Character[]
};
