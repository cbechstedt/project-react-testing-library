import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';

describe('Testa ao entrar na página /favorites', () => {
  test('é exibido na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);

    const text = screen.getByText(/no favorite pokemon found/i);
    expect(text).toBeInTheDocument();
  });
});
