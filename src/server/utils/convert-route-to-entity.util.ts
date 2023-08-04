const mapping: Record<string, string> = {
  inventories: 'inventory',
  organizations: 'organization',
  'purchase-histories': 'purchase_history',
  sales: 'sales',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
