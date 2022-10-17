import {BrowserRouter as Router} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

function renderWithProviders(el) {
  render(<Router>{el}</Router>);
}

test('Landing page exists', () => {
  renderWithProviders(<LandingPage />);
  const linkElement = screen.getByText(/your search begins/i);
  expect(linkElement).toBeInTheDocument();
});
