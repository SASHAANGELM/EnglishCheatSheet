import axios from 'axios';

export const SERVER_URL = process.env.NODE_ENV === 'production' ? window.location.origin : 'http://localhost:3000';
export const CLIENT_URL = window.location.origin;

export const WG_APP_ID = '585ec68d1028ab7ad5c6d2e5dabd8a11';

axios.defaults.baseURL = CLIENT_URL;
