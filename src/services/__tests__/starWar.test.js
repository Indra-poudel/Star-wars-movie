import {httpClient} from '../httpClient';
import {getCharacterInfo, getListOfStarWarEpisode} from '../starWar';

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

describe('Test for starWar services', () => {
  it('getListOfStarWarEpisode should return  status 200 ', async () => {
    const mockResponse = {
      status: 200,
      data: {
        results: [],
      },
    };

    httpClient.get = jest.fn().mockResolvedValue(mockResponse);

    const resp = await getListOfStarWarEpisode();
    expect(resp).toEqual(mockResponse.data.results);
  });

  it('getCharacterInfo should return  status 200 ', async () => {
    const mockResponse = {
      status: 200,
      data: {
        name: 'Indra',
        height: '5.8',
        gender: 'male',
      },
    };

    httpClient.get = jest.fn().mockResolvedValue(mockResponse);

    const resp = await getCharacterInfo();
    expect(resp).toEqual(mockResponse.data);
  });
});
