import { render, screen } from '@testing-library/react';
import { Portillos } from './Portillos';

describe('Portillos', () => {
  test('renders the header', () => {
    const r = render(<Portillos results={[]} />);
    expect(r.getByTestId('testing__portillos__content')).not.toBeNull();
    expect(r.getByTestId('testing__portillos__content__header')).not.toBeNull();
    expect(r.getByTestId('testing__portillos__content__subheader')).not.toBeNull();
  });

  test('renders the header', () => {
    const r = render(<Portillos data-testid='blah' />);
    expect(() => r.getByTestId('blah')).toThrow();

    r.rerender(<Portillos data-testid='blah' results={[]} />);

    expect(r.getByTestId('blah')).not.toBeNull();
  });
});
