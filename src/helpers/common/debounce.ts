interface DebouncedFunc<T extends (...args: any[]) => void> {
  (...args: Parameters<T>): void;
  cancel: () => void;
  flush: () => void;
}

export function debounce<T extends (...args: any[]) => void>(callback: T, duration: number): DebouncedFunc<T> {
  let lastArgs: Parameters<T> | null = null;
  let timeout: NodeJS.Timeout | null = null;

  const debounced = (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    lastArgs = args;
    timeout = setTimeout(() => callback(...args), duration);
  };

  debounced.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
  };

  debounced.flush = () => {
    debounced.cancel();
    if (lastArgs) {
      callback(...lastArgs);
    }
  };

  return debounced;
}
