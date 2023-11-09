import { render, screen } from '@testing-library/react'
import userEvent from'@testing-library/user-event'
import Pokedex from './page';

describe('Pokedex page', () => {
  describe('Header component', () => {
    it('should render', () => {
      const { getByText } = render(
        <Pokedex />
      );
  
      expect(getByText('Pokédex')).toBeInTheDocument();
    });
  })

  describe('Input component', () => {
    it('should be functional', async () => {
      const { getByPlaceholderText } = render(
        <Pokedex />
      );
      const user = userEvent.setup();
  
      const inputElement = getByPlaceholderText('Digite um pokémon');
  
      await user.type(inputElement, 'gengar'); 
  
      expect(inputElement).toHaveValue('gengar');
    });

    it('should be empty after submit', async () => {
      const { getByPlaceholderText, getByTestId } = render(
        <Pokedex />
      );
      
      const user = userEvent.setup();
  
      const inputElement = getByPlaceholderText('Digite um pokémon');
      const searchButton = getByTestId('searchButton')
  
      await user.type(inputElement, 'gengar'); 
  
      expect(inputElement).toHaveValue('gengar');
  
      await user.click(searchButton);
  
      expect(inputElement).toHaveValue('');
    });
  })

  describe('Button', () => {
    it('should be disabled when input is empty', async () => {
      const { getByTestId } = render(
        <Pokedex />
      );      
  
      const searchButton = getByTestId('searchButton');
  
      expect(searchButton).toBeDisabled();
    });
    
    it('should be enabled when input has text', async () => {
      const { getByPlaceholderText, getByTestId } = render(
        <Pokedex />
      );
      const user = userEvent.setup();
      const inputElement = getByPlaceholderText('Digite um pokémon');
      const searchButton = getByTestId('searchButton');
  
      await user.type(inputElement, 'gengar'); 
  
      expect(inputElement).toHaveValue('gengar');
      expect(searchButton).toBeEnabled();
    });

    it('should display pokemon sprite when request is successful', async () => {
      const { getByPlaceholderText, getByTestId } = render(
        <Pokedex />
      );
      const user = userEvent.setup();
      const inputElement = getByPlaceholderText('Digite um pokémon');
      const searchButton = getByTestId('searchButton');
  
      await user.type(inputElement, 'gengar'); 
  
      expect(inputElement).toHaveValue('gengar');

      await user.click(searchButton);

      const sprite = await screen.findByTestId('pokemonSprite');
      expect(sprite).toBeInTheDocument();
    });


    it('should not display pokemon after timers', async () => {
      jest.useFakeTimers();
      const { getByPlaceholderText, getByTestId } = render(
        <Pokedex />
      );
      /**
       * userEvent and faketimers do not work well together
       * user event only completes after the delay is completed, resulting in a timeout
       * instead, test if after the userEvent completes, the sprite is still there
       */
      const user = userEvent.setup(({delay: null}));
      const inputElement = getByPlaceholderText('Digite um pokémon');
      const searchButton = getByTestId('searchButton');
      
      await user.type(inputElement, 'gengar'); 
      expect(inputElement).toHaveValue('gengar');
      await user.click(searchButton);

      const sprite = screen.queryByTestId('pokemonSprite');
      expect(sprite).toBeNull();
    });
  })
})