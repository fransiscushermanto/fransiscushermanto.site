import type { Emitter } from "@/hooks/use-emitter";

export interface RouteEventProviderProps {
  events: RouteEventEmitter;
  children: React.ReactNode;
}

export type RouteEventContextProps = RouteEventEmitter | undefined;

export interface RouteEvent {
  navigate: string;
}

export type RouteEventEmitter = Emitter<RouteEvent>;
