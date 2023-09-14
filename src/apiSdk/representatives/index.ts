import axios from 'axios';
import queryString from 'query-string';
import { RepresentativeInterface, RepresentativeGetQueryInterface } from 'interfaces/representative';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRepresentatives = async (
  query?: RepresentativeGetQueryInterface,
): Promise<PaginatedInterface<RepresentativeInterface>> => {
  const response = await axios.get('/api/representatives', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createRepresentative = async (representative: RepresentativeInterface) => {
  const response = await axios.post('/api/representatives', representative);
  return response.data;
};

export const updateRepresentativeById = async (id: string, representative: RepresentativeInterface) => {
  const response = await axios.put(`/api/representatives/${id}`, representative);
  return response.data;
};

export const getRepresentativeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/representatives/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRepresentativeById = async (id: string) => {
  const response = await axios.delete(`/api/representatives/${id}`);
  return response.data;
};
