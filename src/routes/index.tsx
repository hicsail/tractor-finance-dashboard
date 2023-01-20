import { ReactNode } from "react";
import { Route } from "react-router-dom";
import appRoutes, { RouteType } from "./appRoutes";
import PageWrapper from "../components/layout/PageWrapper";

const generateRoute = (routes: RouteType[]): ReactNode => {
  return routes.map((route, index) => (
    <Route
      index
      path={route.path}
      element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
      key={index}
    />
  ));
};

export const routes: ReactNode = generateRoute(appRoutes);
