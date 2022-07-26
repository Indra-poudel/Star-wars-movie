import React from 'react';
import {Text} from 'react-native';
import renderer from 'react-test-renderer';
import ScreenWrapper from '../screenWrapper';

jest.mock('@react-navigation/elements', () => ({
  useHeaderHeight: () => 10,
}));

test('Renders snapshot as expected', () => {
  const tree = renderer
    .create(
      <ScreenWrapper>
        <Text>Screen Wrapper Componet</Text>
      </ScreenWrapper>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
