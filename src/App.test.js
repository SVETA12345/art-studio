import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText('Главная')).toBeInTheDocument();
  expect(screen.getByText('О студии')).toBeInTheDocument();
  expect(screen.getByText('Расписание и контакты')).toBeInTheDocument();
});

test('renders home page title', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(
    screen.getByText(/Художественная студия РГУ нефти и газа/i)
  ).toBeInTheDocument();
});