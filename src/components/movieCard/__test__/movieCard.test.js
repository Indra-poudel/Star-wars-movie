import React from 'react';
import MovieCard from '../movieCard';
import renderer from 'react-test-renderer';
import Images from '../../../assets/image';

test('Renders snapshot as expected', () => {
  const tree = renderer
    .create(
      <MovieCard
        onPress={() => {}}
        title={'Hello'}
        image={Images[1].image}
        color={Images[1].color}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
