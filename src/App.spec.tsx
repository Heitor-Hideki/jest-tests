import { render, waitFor, waitForElementToBeRemoved, screen } from '@testing-library/react'
import userEvent from'@testing-library/user-event'
import Home from './app/page'

describe('Home component', () => {
  it('should render list items', () => {
    const { getByText } = render(<Home />);

    expect(getByText('yadoran')).toBeInTheDocument();
    expect(getByText('yadon')).toBeInTheDocument();
    expect(getByText('yadoking')).toBeInTheDocument();
  });
  
  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText, debug } = render(<Home />);
    const user = userEvent.setup();

    const inputElement = getByPlaceholderText('Digite um pokémon');
    const addButton = getByText('Adicionar');

    await user.type(inputElement, 'gengar'); 
    await user.click(addButton);

    expect(getByText('gengar')).toBeInTheDocument();
  });

  it('should be able to remove items', async () => {
    const { getAllByText, queryByText } = render(<Home />);
    const user = userEvent.setup();

    const removeButtons = getAllByText('Remover');
    await user.click(removeButtons[0]);

    expect(queryByText('gengar')).not.toBeInTheDocument();
  });
})