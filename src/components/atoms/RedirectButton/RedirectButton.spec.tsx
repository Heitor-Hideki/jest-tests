import { render } from '@testing-library/react'
import userEvent from'@testing-library/user-event'
import RedirectButton from '.';
import mockRouter from 'next-router-mock';

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'))

describe('RedirectButton component', () => {
  it('should appear on screen', () => {
    const pageName = 'yadoking'
    const { getByText } = render(
      <RedirectButton 
      pageName={pageName}
      />
    );

    expect(getByText(`Navegar para ${pageName}`)).toBeInTheDocument();
  });

  it('should redirect', async () => {
    const pageName = 'yadoking'
    const { getByText } = render(
      <RedirectButton 
        pageName={pageName}
      />
    );
    const user = userEvent.setup();
    const redirectButton = getByText(`Navegar para ${pageName}`);
    
    await user.click(redirectButton)

    expect(mockRouter).toMatchObject({
      pathname: `/${pageName}`,
    });
  });
})