import { render } from '@testing-library/react'
import userEvent from'@testing-library/user-event'
import mockRouter from 'next-router-mock';
import Home from './app/page';

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'))

describe('RedirectButton component', () => {
  it('should appear on screen', () => {
    const { getByText } = render(
      <Home />
    );
    expect(getByText('Trocar de página')).toBeInTheDocument();
  });

  it('should redirect', async () => {
    const { getByText } = render(
      <Home />
    );
    
    const user = userEvent.setup();

    const redirectButton = getByText('Trocar de página');
    await user.click(redirectButton)

    expect(mockRouter).toMatchObject({ 
      pathname: "/yadoran",
    });
  });
})