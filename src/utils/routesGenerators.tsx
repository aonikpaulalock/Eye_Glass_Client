import { TRouteItem, TRoutes } from "../types"


export const routesGenerators = (routeItem: TRouteItem[]) => {
  const routes = routeItem.reduce((acc: TRoutes[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element
      })
    }

    if (item.children) {
      item.children.forEach((item) => {
        acc.push({
          path: item.path!,
          element: item.element
        })
      })
    }
    return acc
  }, [])
  return routes
}