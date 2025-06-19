"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * @param step 0.5 - The step to increase the progress by each interval, default is 0.5
 * @returns
 */
function useFakeProgress(step: number = 0.5) {
  const [isProgressing, setIsProgressing] = useState(false);
  const [progress, setProgress] = useState(0);
  const currentProgressRef = useRef(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const startProgress = useCallback(() => {
    // Reset and start immediately
    currentProgressRef.current = 0;
    setProgress(0);
    setIsProgressing(true);

    // Clear any existing intervals first
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }

    // Start the interval immediately instead of waiting for the effect
    intervalIdRef.current = setInterval(() => {
      currentProgressRef.current += step;
      const calculatedProgress =
        Math.round(
          (Math.atan(currentProgressRef.current) / (Math.PI / 2)) * 100 * 1000,
        ) / 1000;
      setProgress(calculatedProgress);
    }, 100);
  }, [step]);

  const stopProgress = useCallback(() => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
    setIsProgressing(false);
    currentProgressRef.current = 100;
    setProgress(100);
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(0);
    currentProgressRef.current = 0;
    setIsProgressing(false);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  return {
    progress,
    startProgress,
    stopProgress,
    resetProgress,
    isProgressing,
  };
}

export default useFakeProgress;
