import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(`@letmeask-joaovamattos:${key}`);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      `@letmeask-joaovamattos:${key}`,
      JSON.stringify(state)
    );
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
