import { useEffect, useMemo } from "react";
import { useLatest } from "./useLatest";

function makeDebouncedHook(debounceFn) {
    return function useDebounce(cb, ms) {
        const latestCb = useLatest(cb);

        const debouncedFn = useMemo(
            () =>
            debounceFn((...args) => {
                latestCb.current(...args);
            }, ms),
            [ms, latestCb]
        );

        useEffect(() => () => debouncedFn.cancel(), [debouncedFn]);

        return debouncedFn;
    };
}

export default makeDebouncedHook