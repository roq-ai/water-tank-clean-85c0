import * as yup from 'yup';

export const requestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  service_id: yup.string().nullable().required(),
  customer_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
