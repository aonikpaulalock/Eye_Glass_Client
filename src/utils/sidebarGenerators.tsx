import { NavLink } from "react-router-dom"
import { TRouteItem, Tslider } from "../types"

export const sidebarGenerators = (sidebarItems: TRouteItem[]) => {
  const slidebar = sidebarItems.reduce((acc: Tslider[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${item.path}`}>{item.name}</NavLink>
      })
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${child.path}`}>{child.name}</NavLink>,
        }))
      })
    }
    return acc
  }, [])
  return slidebar
}