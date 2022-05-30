import { City, ListResponse } from 'models';
import axiosClient from './axiosClient';

const cityApi = {
  getAll(): Promise<ListResponse<City>> {
    const url = '/cities';
    return axiosClient.get(url, {
      params: {
        _limit: 10,
        _page: 1,
      },
    });
  },
};

export default cityApi;
