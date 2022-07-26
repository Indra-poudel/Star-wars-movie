import axios from 'axios';

import {STAR_WAR_BASE_URL} from '../constants/endpoints';

export const httpClient = axios.create({
  baseURL: STAR_WAR_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
