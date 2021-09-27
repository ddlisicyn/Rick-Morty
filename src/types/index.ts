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

export type Character = {
	id: number,
	name: string,
	status: string,
	species: string,
	type: string,
	gender: string,
	origin: Origin,
	location: Origin,
	image: string,
	episode: [],
	url: string,
	created: string
};
