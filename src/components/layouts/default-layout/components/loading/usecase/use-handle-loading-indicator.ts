import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import useFakeProgress from "@/hooks/use-fake-progress";
import { useRouteEventContext } from "../../../hooks";

export function useHandleLoadingIndicator() {
  const pathname = usePathname();
  const prevPathnameRef = useRef<string>(pathname);
  const routeEvent = useRouteEventContext();

  const [isHideLoadingIndicator, setIsHideLoadingIndicator] = useState(false);

  const {
    startProgress,
    progress,
    stopProgress,
    resetProgress,
    isProgressing,
  } = useFakeProgress();

  const isMovingToOtherPage = pathname !== prevPathnameRef.current;
  const isNavigating = isProgressing && isMovingToOtherPage;

  useEffect(() => {
    function handleNavigate(destination: string) {
      console.log(destination, prevPathnameRef.current);
      if (destination === prevPathnameRef.current) {
        return;
      }
      setIsHideLoadingIndicator(false);
      startProgress();
    }

    routeEvent.on("navigate", handleNavigate);

    return () => routeEvent.off("navigate", handleNavigate);
  }, [isMovingToOtherPage, pathname, routeEvent, startProgress]);

  useEffect(() => {
    if (isNavigating) {
      prevPathnameRef.current = pathname;
      stopProgress();
    }
  }, [isNavigating, pathname, stopProgress]);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsHideLoadingIndicator(true);

        setTimeout(() => {
          resetProgress();
          setIsHideLoadingIndicator(false);
        }, 100);
      }, 100);
    }
  }, [isNavigating, progress, resetProgress]);

  return { progress, isHideLoadingIndicator };
}
