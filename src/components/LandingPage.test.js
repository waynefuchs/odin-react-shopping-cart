import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

test('Landing page exists', () => {
  render(<LandingPage />);
  const linkElement = screen.getByText(/your search begins/i);
  expect(linkElement).toBeInTheDocument();
});
