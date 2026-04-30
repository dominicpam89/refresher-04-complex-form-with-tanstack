import { useCallback, useEffect, useState } from 'react';

interface StorageItem<T> {
  key: string;
  initialValue: T;
}

type NewVal<T> = T | ((t: T) => T);

export function useLocalStorage<T>({ key, initialValue }: StorageItem<T>) {
  const [storageVal, setStorageVal] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(error || `no item found in storage with key: ${key}, defer to default Value`);
      return initialValue;
    }
  });

  const setRealStorageVal = useCallback(
    (newVal: NewVal<T>) => {
      try {
        const val = newVal instanceof Function ? newVal(storageVal) : newVal;
        const serializedVal = JSON.stringify(val);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, serializedVal);
        }
        setStorageVal(val);
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
        throw error; // komponen bisa menangani dengan try/catch atau error boundary
      }
    },
    [key, storageVal]
  );

  const removeStorageVal = useCallback(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
      setStorageVal(initialValue);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
      throw error;
    }
  }, [key, initialValue]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue !== null) {
        try {
          const newVal = JSON.parse(event.newValue);
          setStorageVal(newVal);
        } catch (error) {
          console.warn(`Error parsing storage event for key "${key}":`, error);
        }
      } else if (event.key === key && event.newValue === null) {
        setStorageVal(initialValue);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, initialValue]);

  return [storageVal, setRealStorageVal, removeStorageVal] as const;
}
