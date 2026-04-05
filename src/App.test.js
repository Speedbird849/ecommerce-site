import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('nuka-carousel', () => ({
  Carousel: ({ children }) => <div>{children}</div>,
}));

test('renders AudioZone brand', () => {
  render(<App />);
  const brandElement = screen.getByRole('heading', { name: /audio\s*zone/i });
  expect(brandElement).toBeInTheDocument();
});
