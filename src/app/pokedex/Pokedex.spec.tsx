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
  
      await user.click(searchButton)
  
      expect(inputElement).toHaveValue('');
    });
  })

  describe('Button', () => {
    it('should be disabled when input is empty', async () => {
      const { getByTestId } = render(
        <Pokedex />
      );      
  
      const searchButton = getByTestId('searchButton') 
  
      expect(searchButton).toBeDisabled();
    });
    
    it('should be enabled when input has text', async () => {
      const { getByPlaceholderText, getByTestId } = render(
        <Pokedex />
      );
      const user = userEvent.setup();
      const inputElement = getByPlaceholderText('Digite um pokémon');
      const searchButton = getByTestId('searchButton')
  
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
      const searchButton = getByTestId('searchButton')
  
      await user.type(inputElement, 'gengar'); 
  
      expect(inputElement).toHaveValue('gengar');

      await user.click(searchButton);

      const sprite = await screen.findByTestId('pokemonSprite');
      expect(sprite).toBeInTheDocument();
    });
  })
})