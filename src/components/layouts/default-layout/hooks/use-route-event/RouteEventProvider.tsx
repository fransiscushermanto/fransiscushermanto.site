'use client';

import { createContext } from "react";
import type { RouteEventContextProps, RouteEventProviderProps } from "./types";

export const RouteEventContext =
  createContext<RouteEventContextProps>(undefined);

const RouteEventProvider = (props: RouteEventProviderProps) => {
  const { children, events } = props;

  return (
    <RouteEventContext.Provider value={events}>
      {children}
    </RouteEventContext.Provider>
  );
};

export default RouteEventProvider;
