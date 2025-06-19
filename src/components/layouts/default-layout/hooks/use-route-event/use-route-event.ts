import { useEmitter } from "@/hooks/use-emitter";
import type { RouteEventEmitter, RouteEvent } from "./types";

export function useRouteEvent() {
  return useEmitter<RouteEventEmitter, RouteEvent>();
}
