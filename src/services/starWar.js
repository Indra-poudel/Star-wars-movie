import {httpClient} from './httpClient';
import {
  GET_ALL_START_WAR_EPISODES,
  GET_CHARACTER_INFO,
} from '../constants/endpoints';
import {interpolate} from '../utils/string';

export const getListOfStarWarEpisode = async () => {
  const response = await httpClient.get(GET_ALL_START_WAR_EPISODES);
  return response.data?.results || [];
};

export const getCharacterInfo = async id => {
  const url = interpolate(GET_CHARACTER_INFO, {characterId: id});
  const response = await httpClient.get(url);

  return {
    name: response.data.name,
    height: response.data.height,
    gender: response.data.gender,
  };
};
