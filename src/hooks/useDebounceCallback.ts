import { DependencyList, useCallback, useRef } from "react";
import { useInstantValue } from "./useInstantValue";

type Callback = (...arg: any[]) => any;

export function useDebounceCallback<T extends Callback>(
	callback: T,
	timeout?: number,
	dependencies?: DependencyList,
) {
	const timeoutValue = timeout ?? 250;
	const timeoutRef = useRef<number>();
	const callbackRef = useInstantValue(callback);

	const debounceCallback = useCallback((...args: Parameters<T>) => {
		window.clearTimeout(timeoutRef.current);
		timeoutRef.current = window.setTimeout(() => {
			callbackRef.current?.(...args);
		}, timeoutValue);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, dependencies || [callbackRef, timeoutValue]);

	return debounceCallback;
}
