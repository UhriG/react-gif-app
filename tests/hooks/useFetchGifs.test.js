import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en custom hook useFetchGifs', () => {
	test('debe de retornar el estado inicial', () => {
		const { result } = renderHook(() => useFetchGifs('One Punch'));
		const { images, isLoading } = result.current;

		expect(images).toEqual([]);
		expect(isLoading).toBe(true);
	});

	test('debe de retornar un arreglo de imágenes y el isLoading en false', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs('One Punch')
		);
		await waitForNextUpdate();

		const { images, isLoading } = result.current;

		expect(images.length).toBe(10);
		expect(isLoading).toBe(false);
	});
});
