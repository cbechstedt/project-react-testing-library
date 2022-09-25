import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('Ao entrar na página /about', () => {
  test('testa se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const about = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2,
    });
    expect(about).toBeInTheDocument();
  });

  test('testa se a página contém iomagem da Pokédex', () => {
    renderWithRouter(<About />);

    const image = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
