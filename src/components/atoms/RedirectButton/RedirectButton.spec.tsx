import { render } from '@testing-library/react'
import userEvent from'@testing-library/user-event'
import RedirectButton from '.';
import mockRouter from 'next-router-mock';

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'))

describe('RedirectButton component', () => {
  it('should appear on screen', () => {
    const { getByText } = render(
      <RedirectButton />
    );

    expect(getByText('Trocar de página')).toBeInTheDocument();
  });

  it('should redirect', async () => {
    const { getByText } = render(
      <RedirectButton />
    );
    const user = userEvent.setup();
    const redirectButton = getByText('Trocar de página');
    
    await user.click(redirectButton)

    expect(mockRouter).toMatchObject({
      pathname: "/yadoking",
    });
  });
})