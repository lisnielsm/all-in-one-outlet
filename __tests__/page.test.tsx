import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../src/app/page';

describe('Home Page', () => {
	it('renders a heading', () => {
		render(<HomePage />);

		expect(screen.getByText(/all-in-one/i)).toBeInTheDocument();
	});
});
