import { RequestInterface } from 'interfaces/request';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  request?: RequestInterface[];
  user?: UserInterface;
  _count?: {
    request?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  user_id?: string;
}
