import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

const DATA_ID = 'pokemon-type-button';

describe('Ao carregar o componente Pokedex.js', () => {
  test('Testa se os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);

    const btns = screen.getAllByTestId(DATA_ID);
    const names = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

    // console.log(btns[0].innerHTML);
    btns.forEach((btn, index) => {
      expect(btn.innerHTML).toBe(names[index]);
    });
  });

  test('Testa se os botões possuem o data-testid correto, exceto o botão All', () => {
    renderWithRouter(<App />);

    const btnsId = screen.getAllByTestId(DATA_ID);
    btnsId.forEach((btn) => {
      expect(btn).toHaveAttribute('data-testid', DATA_ID);
    });
  });

  test('Testa se é possível clicar no botão All', () => {
    renderWithRouter(<App />);

    const btnAll = screen.getByRole('button', {
      name: /all/i,
    });

    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnAll);
  });
});
