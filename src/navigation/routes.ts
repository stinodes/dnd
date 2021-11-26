import { lazy, mount } from 'navi'

export const routes = mount({
  '/': lazy(() => import('../home')),
  '/create-campaign': lazy(() => import('../campaign/Create')),
  '/campaigns/:id': lazy(() => import('../campaign/Detail')),
  '/campaigns': lazy(() => import('../campaign/Overview')),
})
