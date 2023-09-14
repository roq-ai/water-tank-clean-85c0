const mapping: Record<string, string> = {
  companies: 'company',
  customers: 'customer',
  representatives: 'representative',
  requests: 'request',
  services: 'service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
