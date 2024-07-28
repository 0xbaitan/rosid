export type User = {
  id: string;
  name: string;
  age: number;
  email: string;
};

export type Category = {
  label: string;
};

export type ReduxAction<T> = {
  type: string;
  payload: T;
};

export type PossiblyNull<T> = T | null;
