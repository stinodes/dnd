import { lazy, mount } from 'navi'

export const routes = mount({
  '/': lazy(() => import('../home')),
  '/create-campaign': lazy(() => import('../campaign/Create')),

  '/campaigns/:campaignId/create-location': lazy(
    () => import('../location/Create'),
  ),
  '/campaigns/:campaignId': lazy(() => import('../campaign/Detail')),
  '/campaigns': lazy(() => import('../campaign/Overview')),
})
