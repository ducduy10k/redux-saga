import { ListParams, ListResponse, Student } from 'models';
import axiosClient from './axiosClient';

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = '/students';
    return axiosClient.get(url, {
      params,
    });
  },
  getById(id: string): Promise<any> {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },
  add(params: ListParams): Promise<Student> {
    const url = '/students';
    return axiosClient.post(url, {
      params,
    });
  },
  update(params: ListParams): Promise<Student> {
    const url = '/students';
    return axiosClient.patch(url, {
      params,
    });
  },
  remove(id: string): Promise<any> {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};

export default studentApi;
