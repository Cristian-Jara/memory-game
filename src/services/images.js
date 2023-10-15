import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fed-team.modyo.cloud/api/',
  timeout: 3000,
});

export const getImages = () =>
  axiosInstance.get(`/content/spaces/animals/types/game/entries?per_page=20`);
