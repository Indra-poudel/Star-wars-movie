import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from '../movieDetails';

jest.mock('@react-navigation/elements', () => ({
  useHeaderHeight: () => 10,
}));

test('Renders snapshot as expected', () => {
  const tree = renderer
    .create(
      <MovieDetails
        route={{
          params: {
            characters: [],
            title: 'A New Hope',
            episode_id: 4,
            director: 'George Lucas',
            producer: 'Gary Kurtz, Rick McCallum',
            release_date: '1977-05-25',
          },
        }}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
