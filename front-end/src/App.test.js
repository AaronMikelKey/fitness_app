import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Fitness Tracker', () => {
  render(<App />);
  const h1Element = screen.getByText(/Fitness Tracker/i);
  expect(h1Element).toBeInTheDocument();
});
