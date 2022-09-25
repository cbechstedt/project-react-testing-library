import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Ao entrar numa página que não existe', () => {
  test('testa se exibido na tela um h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const text = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });
    expect(text).toBeInTheDocument();
  });
  test('testa se existe uma imagem com o src correto', () => {
    renderWithRouter(<NotFound />);

    const image = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
