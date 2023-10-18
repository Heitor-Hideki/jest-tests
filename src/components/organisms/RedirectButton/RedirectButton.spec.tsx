import { render } from '@testing-library/react'
import { mocked } from 'jest-mock'
import userEvent from'@testing-library/user-event'
import { useRouter } from 'next/router'
import RedirectButton from '.';

jest.mock('next/router', () => {
  return {
    useRouter: jest.fn()
  }
})

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
    const pushMock = () => {};
    const useRouterMocked = mocked(useRouter);
    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any)
    
    const redirectButton = getByText('Trocar de página');
    await user.click(redirectButton)

    expect(pushMock).toHaveBeenCalled();
  });
})