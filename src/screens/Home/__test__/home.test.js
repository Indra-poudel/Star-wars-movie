import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../home';

jest.mock('@react-navigation/elements', () => ({
  useHeaderHeight: () => 10,
}));

test('Renders snapshot as expected', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
