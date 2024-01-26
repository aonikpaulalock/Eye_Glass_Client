import { ReactNode } from "react";

export type TRoutes = {
  path: string;
  element: ReactNode;
}

export type Tslider = {
  key: string;
  label: ReactNode;
  children?: Tslider[]
}

export type TRouteItem = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRouteItem[]
}
