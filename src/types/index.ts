type Origin = {
	name: string,
	url: string
};

export type PaginationInfo = {
	count: number,
	pages: number,
	next: string,
	prev: string | null
}

export enum Genders {
	Male = 'Male',
	Female = 'Female',
	Genderless = 'Genderless',
	Unknown = 'unknown'
}

export enum Status {
	Alive = 'Alive',
	Dead = 'Dead',
	Unknown = 'unknown'
}

export type Character = {
	id: number,
	name: string,
	status: Status,
	species: string,
	type: string,
	gender: Genders,
	origin?: Origin,
	location?: Origin,
	image: string,
	episode: string[],
	url: string,
	created: string
};
