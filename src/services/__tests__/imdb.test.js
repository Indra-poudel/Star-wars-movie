import {httpClient} from '../httpClient';
import {getIMDbRating} from '../imdb';

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

describe('Test for getIMDbRating service', () => {
  it('getIMDbRating should return  status 200 ', async () => {
    const mockResponse = {
      status: 200,
      data: {
        imDb: 8,
      },
    };

    httpClient.get = jest.fn().mockResolvedValue(mockResponse);

    const resp = await getIMDbRating('movieId');

    expect(resp).toEqual(8);
  });
});
