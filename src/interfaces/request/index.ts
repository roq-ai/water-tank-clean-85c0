import { ServiceInterface } from 'interfaces/service';
import { CustomerInterface } from 'interfaces/customer';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface RequestInterface {
  id?: string;
  status: string;
  service_id: string;
  customer_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  service?: ServiceInterface;
  customer?: CustomerInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface RequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  service_id?: string;
  customer_id?: string;
  company_id?: string;
}
