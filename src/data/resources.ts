
// Fixed type re-export to use `export type`
// Also simplified imports and exports, adapting to the new smaller resource files setup.

export type { Resource } from './types';
export { categories } from './categories';

import { resourcesMain } from './resourcesListMain';

export const getFeaturedResources = () => resourcesMain.filter(resource => resource.featured);

export const getResourcesByCategory = (categoryId: string) =>
  resourcesMain.filter(resource => resource.category === categoryId);

export { resourcesMain };
