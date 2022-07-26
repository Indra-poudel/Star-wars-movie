import {httpClient} from './httpClient';

import {GET_RATING, IMDB_BASE_URL} from '../constants/endpoints';
import {interpolate} from '../utils/string';
import {IMDB_API_KEY} from '../constants/apiKey';

export const getIMDbRating = async id => {
  const endpoint = interpolate(GET_RATING, {apiKey: IMDB_API_KEY, imdbId: id});

  const response = await httpClient.get(endpoint, {
    baseURL: IMDB_BASE_URL,
  });

  return response.data.imDb;
};
