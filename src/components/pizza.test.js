import { render, screen } from '@testing-library/react';
import { createRenderer as createShallowRenderer, ShallowRenderer } from 'react-test-renderer/shallow';
import { Pizza } from './Pizza';

// Shallow rendering does not place the component on the DOM. It allows prop inspecting
export const shallowRender = (component, renderer = createShallowRenderer()) => {
  renderer.render(component);

  return { output: renderer.getRenderOutput(), renderer };
};

describe('Pizza', () => {
  test('renders the header', () => {
    const r = render(<Pizza />);
    // console.log(r);
    const el = screen.getByText(/Pizza/i);
    expect(el).toBeInTheDocument();

    const lp = r.getByTestId('testing__pizza__subheader');
    expect(lp).not.toBeNull();
  });

  test('renders the Portillos', () => {
    const r = render(<Pizza />);
    const pt = r.getByTestId('testing__pizza__content');
    expect(pt).not.toBeNull();
  });

  test('renders shallow', () => {
    const r = shallowRender(<Pizza />);
    expect(r.output.props.children[3].props['data-testid']).toBe('testing__pizza__content');
    expect(r.output.props.children[3].props.results).toEqual([1, 2, 3, 4]);
  });
});
