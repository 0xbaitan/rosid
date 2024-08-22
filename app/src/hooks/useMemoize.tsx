import { useMemo } from 'react';

export default function useMemoize<T>(args: T) {
  return useMemo(() => args, [args]);
}
