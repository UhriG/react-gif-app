import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
	test('Debe cambiar el valor de la caja de texto', () => {
		render(<AddCategory onNewCategory={() => {}} />);

		const input = screen.getByRole('textbox');

		fireEvent.input(input, { target: { value: 'Hola Mundo' } });

		expect(input.value).toBe('Hola Mundo');
	});

	test('Submit del formulario', () => {
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: 'Hola Mundo' } });
		fireEvent.submit(form);

		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith('Hola Mundo');

		expect(input.value).toBe('');
	});

	test('No debe llamar onNewCategory si el input está vacío', () => {
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);

		const form = screen.getByRole('form');
		fireEvent.submit(form);

		expect(onNewCategory).not.toHaveBeenCalled();
	});
});
