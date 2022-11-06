import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
	const category = 'One Punch';

	test('debe de mostrar el loading inicialmente', () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		});

		render(<GifGrid category={category} />);
		expect(screen.getByText('Loading...'));
		expect(screen.getByText(category));
	});

	test('Debe mostrar items cuando se cargan imágenes useFetchGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				url: 'https://localhost/cualquier/cosa.jpg',
				title: 'Cualquier cosa 1',
			},
			{
				id: '123',
				url: 'https://localhost/cualquier/cosa.jpg',
				title: 'Cualquier cosa 2',
			},
		];

		// Mock de la función
		useFetchGifs.mockReturnValue({
			images: gifs,
			loading: false,
		});

		render(<GifGrid category={category} />);

		expect(screen.getAllByRole('img').length).toBe(gifs.length);
	});
});
