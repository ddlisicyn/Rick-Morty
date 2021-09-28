export const getData = async (url: string) => {
	const response = await fetch(url);

	if (response.ok) {
		return await response.json();
	}

	throw Error;
};
