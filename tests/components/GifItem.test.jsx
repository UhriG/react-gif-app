import { render, screen } from '@testing-library/react';
import GifItem from '../../src/components/GifItem';

describe('Testing component <GitItem />', () => {
	const title = 'Un titulo';
	const url = 'https://localhost/algo.jpg';

	test('Debe hacer match con el snapshot', () => {
		const { container } = render(<GifItem title={title} url={url} />);

		expect(container).toMatchSnapshot();
	});

	test('De mostrar la imagen con el URL y el ALT indicado', () => {
		render(<GifItem title={title} url={url} />);

		const { src, alt } = screen.getByRole('img');

		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('Debe mostrar el titulo en el componente', () => {
		render(<GifItem title={title} url={url} />);
		expect(screen.getByText(title)).toBeTruthy();
	});
});
