import { useContext } from "react";

import { RouteEventContext } from "./RouteEventProvider";

export function useRouteEventContext() {
  const context = useContext(RouteEventContext);

  if (!context) {
    throw new Error(
      "useRouteEventContext must be used within a RouteEventProvider",
    );
  }

  return context;
}
