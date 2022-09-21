import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Ao entrar na raiz da aplicação', () => {
  test('testa se os links do topo da aplicação aparecem na tela ', () => {
    renderWithRouter(<App />);

    const links = ['Home', 'About', 'Favorite Pokémons'];

    links.forEach((link) => {
      const linksTest = screen.getByRole('link', { name: link });
      expect(linksTest).toBeInTheDocument();
    });
  });

  test('testa se ao clicar no link Home, aplicação é redirecionada para url /', () => {
    renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /home/i });
    userEvent.click(linkHome);
    const buttonHome = screen.getByRole('button', { name: 'Próximo pokémon' });

    expect(buttonHome).toBeInTheDocument();
  });

  test('testa se ao clicar no link About, aplicação é redirecionada para /about', () => {
    renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /about/i });
    userEvent.click(linkAbout);
    const about = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });

    expect(about).toBeInTheDocument();
  });

  test('testa se ao clicar em Fav. Pok., é redirecionada para /Favorite Pokémons', () => {
    renderWithRouter(<App />);

    const linkFav = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(linkFav);
    const fav = screen.getByRole('heading', { name: 'Favorite pokémons', level: 2 });

    expect(fav).toBeInTheDocument();
  });

  test('Teste se a aplicação é redirecionada para a página Not Found', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/rota-que-não-existe');
    });

    const notFoundText = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2,
    });
    expect(notFoundText).toBeInTheDocument();
  });
});
