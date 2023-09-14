interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Cleaning Technician'],
  customerRoles: ['Customer'],
  tenantRoles: ['Cleaning Technician', 'Customer Service Representative'],
  tenantName: 'Company',
  applicationName: 'Water Tank Cleaning Services',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Register in the application',
    'View the services offered by the Company',
    'Request a service from the Company',
    'Manage service request status',
  ],
  ownerAbilities: [
    'Manage company registration',
    'Manage company services',
    'Invite Customer Service Representatives',
    'Manage all service requests',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f9968d3f-ff56-4d97-b832-1184c75fc7ed',
};
