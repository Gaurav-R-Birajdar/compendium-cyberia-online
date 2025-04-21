
export { Resource } from './types';
export { categories } from './categories';
export { resources } from './resourcesList';

import { resources } from './resourcesList';

export const getFeaturedResources = () => resources.filter(resource => resource.featured);

export const getResourcesByCategory = (categoryId: string) =>
  resources.filter(resource => resource.category === categoryId);
