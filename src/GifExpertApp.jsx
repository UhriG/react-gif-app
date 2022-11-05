import { useState } from 'react';
import { GifGrid, AddCategory } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState([]);

	const onAddCategory = (newCategory) => {
		// Check if the category already exists.
		if (
			categories.some(
				(category) =>
					category.toLowerCase() === newCategory.toLowerCase()
			)
		)
			return;

		// Add the new category.
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory onNewCategory={onAddCategory} />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
