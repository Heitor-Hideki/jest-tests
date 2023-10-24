import { render } from '@testing-library/react'
import userEvent from'@testing-library/user-event'
import Pokedex from './page';

describe('Pokedex page', () => {
  it('should render header', () => {
    const { getByText } = render(
      <Pokedex />
    );

    expect(getByText('Pokédex')).toBeInTheDocument();
  });
  
  it('should have working input', async () => {
    const { getByPlaceholderText } = render(
      <Pokedex />
    );
    const user = userEvent.setup();

    const inputElement = getByPlaceholderText('Digite um pokémon');

    await user.type(inputElement, 'gengar'); 

    expect(inputElement).toHaveValue('gengar');
  });

  it('should clear input after send', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Pokedex />
    );
    
    const user = userEvent.setup();

    const inputElement = getByPlaceholderText('Digite um pokémon');
    const searchButton = getByTestId('searchButton')

    await user.type(inputElement, 'gengar'); 

    expect(inputElement).toHaveValue('gengar');

    await user.click(searchButton)

    expect(inputElement).toHaveValue('');
  });
})