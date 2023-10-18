import { render } from '@testing-library/react'
import userEvent from'@testing-library/user-event'
import List from '.';

describe('List component', () => {
  it('should render list items', () => {
    const { getByText } = render(
      <List pokemons={['yadoran', 'yadon', 'yadoking']} />
    );

    expect(getByText('yadoran')).toBeInTheDocument();
    expect(getByText('yadon')).toBeInTheDocument();
    expect(getByText('yadoking')).toBeInTheDocument();
  });
  
  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText } = render(
      <List pokemons={[]} />
    );
    const user = userEvent.setup();

    const inputElement = getByPlaceholderText('Digite um pokémon');
    const addButton = getByText('Adicionar');

    await user.type(inputElement, 'gengar'); 
    await user.click(addButton);

    expect(getByText('gengar')).toBeInTheDocument();
  });

  it('should be able to remove items', async () => {
    const { getAllByText, queryByText } = render(
      <List pokemons={['yadoran']} />
    );
    const user = userEvent.setup();

    const removeButtons = getAllByText('Remover');
    await user.click(removeButtons[0]);

    expect(queryByText('yadoran')).not.toBeInTheDocument();
  });
})