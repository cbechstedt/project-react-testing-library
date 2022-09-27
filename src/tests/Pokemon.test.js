import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Ao rebderizar o componente Pokemon', () => {
  test('Testa se a img do pokemon possui src e alt corretos', () => {
    renderWithRouter(<App />);

    const src = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const alt = 'Pikachu sprite';
    const pokemon = screen.getByRole('img', {
      name: /pikachu sprite/i,
    });

    expect(pokemon).toHaveAttribute('src', src);
    expect(pokemon).toHaveAttribute('alt', alt);
  });

  test('Testa se img de favorito possui src e alt corretos', () => {
    renderWithRouter(<App />);

    const src = '/star-icon.svg';
    const alt = 'Pikachu is marked as favorite';

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(moreDetails);

    const favCheckbox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(favCheckbox);

    const favStarImg = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });

    expect(favStarImg).toHaveAttribute('src', src);
    expect(favStarImg).toHaveAttribute('alt', alt);
  });

  test('Testa se é exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);

    const pokType = screen.getByTestId('pokemon-type');
    console.log(pokType.textContent);
    expect(pokType).toHaveTextContent('Electric');
  });
});
