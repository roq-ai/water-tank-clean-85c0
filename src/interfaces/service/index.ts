import { RequestInterface } from 'interfaces/request';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  duration: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  request?: RequestInterface[];
  company?: CompanyInterface;
  _count?: {
    request?: number;
  };
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
}
