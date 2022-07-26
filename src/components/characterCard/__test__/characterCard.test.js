import React from 'react';
import CharacterCard from '../characterCard';
import renderer from 'react-test-renderer';
import {httpClient} from '../../../services/httpClient';

jest.mock('axios', () => {
  return {
    create: jest.fn(() => ({
      post: jest.fn(),
      get: jest.fn(),
      interceptors: {
        request: {use: jest.fn(), eject: jest.fn()},
        response: {use: jest.fn(), eject: jest.fn()},
      },
    })),
  };
});

test('Verify Api data in the component', () => {
  const resp = {
    data: {name: 'Indra Poudel', height: '5.8', gender: 'male'},
  };

  httpClient.get.mockResolvedValue(resp);

  const tree = renderer
    .create(<CharacterCard url={'https://swapi.dev/api/people/1/'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
