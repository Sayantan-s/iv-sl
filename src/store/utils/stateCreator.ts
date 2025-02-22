interface BaseState {
  loading: boolean;
  error: string;
}

type DynamicKeyState<K extends string, T> = {
  [key in K]: T;
};

export type InitialState<K extends string, T> = BaseState &
  DynamicKeyState<K, T>;

export const initialStateCreator = <K extends string, T>(
  key: K,
  value: T
): InitialState<K, T> => {
  const baseState: BaseState = {
    // Explicitly create BaseState part
    loading: false,
    error: "",
  };
  // @ts-ignore: Unreachable code error
  const dynamicState: DynamicKeyState<K, T> = {
    // Explicitly create DynamicKeyState part
    [key]: value,
  };

  return {
    // Return the intersection by merging the two
    ...baseState,
    ...dynamicState,
  };
};
