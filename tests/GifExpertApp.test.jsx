import { screen, render } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
	test('debe de mostrarse correctamente', () => {
		const { container } = render(<GifExpertApp />);
		expect(container).toMatchSnapshot();
	});

	test('debe de mostrar una lista de categorías', () => {
		const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
		const { container } = render(
			<GifExpertApp defaultCategories={categories} />
		);

		expect(container).toMatchSnapshot();
		expect(screen.getAllByRole('img').length).toBe(categories.length);
	});
});
