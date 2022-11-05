const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=aB7PReCRN6QWFqXZW2f2EMNdDWgoi9jZ&q=${category}&limit=10`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map(({ id, title, images }) => {
		return {
			id,
			title,
			url: images?.downsized_medium.url,
		};
	});

	return gifs;
};

export default getGifs;
