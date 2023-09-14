import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RepresentativeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface RepresentativeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  company_id?: string;
  user_id?: string;
}
