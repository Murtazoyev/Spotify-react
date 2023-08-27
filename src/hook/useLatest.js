import { useLayoutEffect, useRef } from "react";

export function useLatest(value) {
  const latestValue = useRef(value);

  useLayoutEffect(() => {
    latestValue.current = value;
  });

  return latestValue;
}
